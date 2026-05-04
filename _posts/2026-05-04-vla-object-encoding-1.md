---
layout: post
title: How do VLAs Encode Scene Objects?
slug: vla-object-encoding-1
date: 2026-05-04
---


I was wondering: what exactly does the model encode about the scene. Given the task: "Pick up the green cube", in a cluttered room, at what point are representations such as 'green', 'cube', and location encoded?

I decided to use linear probes for this investigation. They are very effective, and simple to understand.

Linear Probes
A linear probe finds out whether the model encodes some target information in a linear way.

Given an activation vector, can a linear function predict some target value?

In this instance, we will predict scene objects using model activations. This is a binary classification problem of the form:

$$
p(y=1 | h) = \sigma(\w^{t}h+b)
$$



