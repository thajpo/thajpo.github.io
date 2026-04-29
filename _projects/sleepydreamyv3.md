---
layout: project
title: "SleepyDreamyV3: RL Dynamics"
card_subtitle: "PyTorch DreamerV3 refactor focused on posterior conditioning, UniMix behavior, and stable off-policy evaluation."
date: 2026-02-28
domain: machine-learning
starred: true
star_rank: 2
status: done
image: "/assets/images/SAE.jpg"
has_github: true
github: "https://github.com/thajpo/SleepyDreamyV3"
---

## Overview
A comprehensive PyTorch refactoring project migrating DreamerV3 to precisely align with the official JAX repository logic and original paper implementation details. This deep RL agent architecture focuses on accurate posterior conditioning and preventing convergence issues.

## Technical Details
- Corrected the posterior conditioning parameterization $q(z_t | h_t, x_t)$.
- Standardized UniMix over all categorical model distributions.
- Calibrated optimizer second-moment dynamics and implemented percentile-based return normalization for reliable off-policy evaluation.
