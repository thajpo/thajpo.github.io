---
layout: post
title: Interpretability Applied to Robotics
slug: robotic-interp-intro
date: 2026-04-30
---
\# Introduction

Mechanistic interpretability studies how model internals give rise to behavior, often by identifying representations, circuits, and activation patterns that causally affect outputs. In recent years, it has picked up steam - being applied toward various foundation models to understand learned representations, improve safety, and isolate where failures occur.

For robotics, the question is especially concrete. If a robot is told to move one object but reaches for another, we can describe the failure behaviorally. But the mechanistic question is: did the model fail to represent the requested object, did it represent the wrong object, or did the action generator ignore the correct representation?

![](/assets/uploads/1.png "Target selection")

Robot policies have historically used RL to optimize towards goals such as grasping and manipulating objects. Recently, the success of large language and vision-language models has shifted part of the field toward generalist robot policies that combine pretrained with learned action generation. 

In these works, authors often broadly characterize policy failures as failures to generalize, or follow instruction. I believe that a missing piece is a mechanistic analysis of where task-relevant representations are lost, distorted, or fail to influence action generation.

In short: understanding these robot foundation models is critical for safety, and improved capabilities as we ramp up towards real-world deployments.

\# Developing tooling in a moving field

Robot foundation models are moving at an incredible pace. The final architecture for scalable, performant robot policies is not yet clear. Some labs emphasize synthetic data and world models; others are building proprietary pretrained robot policies inspired by, but not identical to, VLA systems.

Despite this uncertainty, there are clear properties of architectures that can let us 'plan ahead'. Large transformer backbones are often too expensive to use at low-level servo rates, and token-by-token action generation can introduce latency or jitter. Many recent policies therefore use action chunking, diffusion, or flow-matching heads to generate short-horizon continuous action sequences.

![](/assets/uploads/3.png)

Because architectures differ substantially across labs — from VLA-style policies to world-model-based systems and proprietary variants — an interpretability method should ideally target reusable components: **visual-language representations, action-conditioning interfaces, and diffusion/ action heads.**

\# Interpretability Applied to Robotics

I am personally motivated by this problem because I see a future where robots are everywhere. We should thoroughly understand these systems, and where any harmful behaviors exist as a precursor to scaled deployment.

Interpretability is also a means to understand where and why a model failed at a task. It can be used to create better datasets, architectures, or training methods. For example, *Goodfire* released \[Silico](https://www.goodfire.ai/silico) - a platform for localizing model failures. 

When a model fails on a task, it is useful to localize activations that led to that outcome, rather than a different outcome. Therefore, a causal analysis is needed to understand what features lead to that outcome. Since these models are Frankenstein-ed with text, image, and action internals a causal analysis could be significantly harder than a standard LLM. 

This suggests that robotics interpretability cannot simply copy LLM interpretability. We need tools for multimodal representations, action-conditioning interfaces, and continuous trajectory generators.

New techniques may be needed to understand action-heads, specifically. 

What is also lacking in robotics interp is tooling and visualization for researchers. 

* How do you cleanly show how an activation transforms a trajectory?

This is something I have spent some time thinking about, and I believe this subfield is new and ripe with opportunity for improved understanding and capabilities. 

![](/assets/uploads/2.png)

\# What I am working on now

To start, I think it is most useful to be as minimal as possible. LeRobot has a π0.5 replication, and I am evaluating it to find interesting failure mechanisms.

π0.5 contains several components that I expect future robot models to have in some form: visual-language conditioning, learned action generation, and short-horizon continuous action chunks. That makes it a useful testbed.

As a teaser for next time:

I am trying to understand where a vision-language-action policy stops letting the language-specified target object control the robot’s action. In some failures, the model does not simply “fail to generalize.” The instruction names one object, while the internal selected-object readout, generated action direction, and physical contact all converge on another.

The first posts will focus on building this object-chain view of robot failures. Later posts will move from observation to intervention: patching internal states to test whether we can shift a continuous action chunk from the wrong object back toward the requested target.

Thanks for reading.

![]()

\-J
