---
layout: project
title: "ScaleTraining MoE Pipeline"
card_subtitle: "Scaling language-model pretraining from a 10M baseline toward distributed 7B MoE runs and benchmark evaluation."
date: 2026-01-29
domain: machine-learning
starred: true
star_rank: 1
status: done
image: "/assets/images/GNN.jpg"
has_github: true
github: "https://github.com/thajpo/ScaleTraining"
---

## Overview
A large-scale language model pretraining experiment designed to scale operations from a 10M-parameter baseline configuration to a sophisticated 7B Mixture-of-Experts (MoE) model. Includes end-to-end evaluation using `lm-evaluation-harness` to robustly evaluate perplexity and performance on the HellaSwag benchmark.

## Technical Details
- Orchestrated billion-parameter distributed training runs.
- Resolved advanced ROCm compiler optimizations, Triton imports, and circular dependencies.
- Automated evaluation data pipelines for evaluating next-token LLM predictors on 1-million-token datasets.
