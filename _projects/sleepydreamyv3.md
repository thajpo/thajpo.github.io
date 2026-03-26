---
layout: project
title: "SleepyDreamyV3: RL Dynamics"
date: 2026-02-28
domain: machine-learning
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
