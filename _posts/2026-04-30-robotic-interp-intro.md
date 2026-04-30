---
layout: post
title: Interpretability Applied to Robotics
slug: robotic-interp-intro
date: 2026-04-30
---
\# Introduction

Mechanistic Interpretability is a sub-field in deep learning, whereby model behavior is studied and characterized using techniques to dissect and isolate behaviors. Popularized firstly with image generation models by Chris Olah, the applications of interp. has continued to be applied since towards foundation models in the domains of language, biology, and more.

The large goals of interpretability could be summarized as localizing what activation patterns lead to model outputs. By understanding the subsystems the model uses for outputs, we can monitor them for safety - and improve upon their failure modes.

Robot policies have historically used RL to optimize towards grasping and manipulating objects. Only when LLMs and VLMs became more capable was it clear what the path forward would be in robotics. Using VLAs and flow-matching control architectues, impressive results have been attained with regards to control and instruction following in unseen environments.

In these works, authors often broadly characterize policy failures as failures to generalize, or follow instruction. What may be missing to improve capabilities is a mechanistic analysis of where model representations collapse, or fail to properly transfer.

\# Applying Interpretability to VLAs

Robot foundation models are moving at an incredible pace. With the large variance in architecture, it becomes difficult to understand how we can best study these models. Furthermore, the 'final' architecture for scaling up performant robot models it not fully clear. For example, NVIDIA has pushed towards synthetic data generation and world models - while labs such as Generalist vaugely say that they are not using VLAs, but some variant of them using their own pretrained base.

Regardless, the power of transformers seems clear - thus being able to develop interpretability tools for VLMs applied to VLAs, or some variant seems clear.

Transformers, however, can not perform at the required control frequencies for succesful policies. Diffusion / flow matching architectures can output action chunks that have low jitter.

For my investigations, I will use the $\pi$ 0.5 implementation via Huggingface's LeRobot. I hope that the methods and types of experiments run with this model could transition well to other robot architectures in the future.
