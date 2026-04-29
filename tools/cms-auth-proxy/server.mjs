import http from "node:http";
import { randomBytes } from "node:crypto";

const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  OAUTH_BASE_URL,
  OAUTH_ORIGIN = "https://thajpo.github.io",
  OAUTH_SCOPES = "repo,user",
  PORT = "3000",
} = process.env;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET || !OAUTH_BASE_URL) {
  console.error(
    "Missing required env. Set GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, and OAUTH_BASE_URL."
  );
  process.exit(1);
}

const baseUrl = OAUTH_BASE_URL.replace(/\/$/, "");
const redirectUri = `${baseUrl}/callback`;
const states = new Set();

function sendHtml(res, status, html) {
  res.writeHead(status, {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-store",
  });
  res.end(html);
}

function auth(res) {
  const state = randomBytes(24).toString("hex");
  states.add(state);

  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: OAUTH_SCOPES,
    state,
  });

  res.writeHead(302, {
    location: `https://github.com/login/oauth/authorize?${params}`,
    "cache-control": "no-store",
  });
  res.end();
}

async function callback(req, res, url) {
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code || !state || !states.has(state)) {
    sendHtml(res, 400, "<p>Invalid OAuth callback.</p>");
    return;
  }

  states.delete(state);

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: redirectUri,
    }),
  });

  const tokenBody = await tokenRes.json();
  if (!tokenRes.ok || !tokenBody.access_token) {
    const message = JSON.stringify({
      error: tokenBody.error || "token_exchange_failed",
      error_description: tokenBody.error_description,
    });
    sendHtml(res, 500, loginScript("error", message));
    return;
  }

  const content = JSON.stringify({
    token: tokenBody.access_token,
    provider: "github",
  });
  sendHtml(res, 200, loginScript("success", content));
}

function loginScript(status, contentJson) {
  const message = JSON.stringify(`authorization:github:${status}:${contentJson}`);

  return `<!doctype html>
<html>
  <body>
    <script>
      (function () {
        function receiveMessage(event) {
          window.opener.postMessage(${message}, event.origin);
          window.removeEventListener("message", receiveMessage, false);
          window.close();
        }

        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", ${JSON.stringify(OAUTH_ORIGIN)});
      })();
    </script>
  </body>
</html>`;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", baseUrl);

  if (url.pathname === "/auth") {
    auth(res);
    return;
  }

  if (url.pathname === "/callback") {
    callback(req, res, url).catch((error) => {
      console.error(error);
      sendHtml(res, 500, loginScript("error", JSON.stringify({ error: error.message })));
    });
    return;
  }

  if (url.pathname === "/") {
    sendHtml(res, 200, "<p>Decap CMS OAuth proxy is running.</p>");
    return;
  }

  sendHtml(res, 404, "<p>Not found.</p>");
});

server.listen(Number(PORT), () => {
  console.log(`Decap CMS OAuth proxy listening on http://localhost:${PORT}`);
  console.log(`GitHub OAuth callback URL: ${redirectUri}`);
});
