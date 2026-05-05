---
layout: post
title: How do VLAs Encode Scene Objects?
slug: vla-object-encoding-1
date: 2026-05-04
---
(experiments done w/ assistance of GPT 5.5)

I was wondering: what exactly do VLAs ($\pi 0.5$) encode in the scene, and where is it located in the model activations? This post does not cover whether this information is used, only what the model reliably encodes. I found that this is a necessary first step prior to any causal/intervention work.

tldr: 

In the task "Pick up the green cube" among several objects, at what point are representations such as 'green', 'cube', and location encoded? Can we find out what layers encode objects, position, orientation, and other semantic and physical information?

I decided to use linear probes for this investigation due to their ease and shown effectiveness. As a dataset, I used a variety of LIBERO tasks.

Linear Probes
A linear probe finds out whether the model encodes some target information in a linear way.

Given an activation vector, can a linear function predict some target value?

In this instance, we will predict scene objects using model activations. This is a multi-label binary classification problem of the form:

$$
\hat{y}=\sigma(Wh+b)
$$
*note: other probes are used, and will be explained later*.

The probe is fitting $w$ and $b$ to predict our target labels as a probability from the activations $h$. Each class gets its own binary outcome, 

Overfitting and Confounds

To prevent leakage, we also do our test/train split by-episode. Otherwise the probe can easily correlate activations to scene information and find out what the objects are.

The dataset used is LIBERO, but inside there are scenes and various tasks.

