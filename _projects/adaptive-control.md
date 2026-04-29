---
layout: project
title: "Adaptive PID Control Simulation"
subtitle: "Robotic arm trajectory control under external forces"
project_date: "October 2024 - December 2024"
status: wip
domain: robotics
image: "/assets/images/adaptive-arm.jpg"
has_github: true
github: "https://github.com/thajpo/adaptive-control"
has_report: true
report: "/assets/pdfs/adaptive_control_report.pdf"
---

## Overview
This was a project for [CS690K](https://sites.google.com/view/adv-robot-dyn-ctrl) where our group evaluated different control methods for a robotic arm. We used the mujoco python library, and found that adaptive control performed best. See the report for more technical details.

## Technical Details
• Mujoco python library implementation.

• Circular trajectory implementation.

• Wind force disturbance simulation.

• Adaptive controller development.

• Comparison with Ziegler-Nichols PID tuning method.

• Performance analysis under varying conditions.


I was responsible for the adaptive control and simulation implementation of the arm. In the end, the adaptive controller was able to maintain the circular trajectory under the wind disturbance and unconstrained mass handling with much better performance than the Ziegler-Nichols method.

<div class="image-container">
  <img src="/assets/images/adaptive_control.jpg" alt="Adaptive Control Results">
</div>

<div class="tech-stack">
  <span class="tech-tag">Python</span>

  <span class="tech-tag">Control Systems</span>
  <span class="tech-tag">Robotics</span>
  <span class="tech-tag">Simulation</span>
</div>

## Key Learnings
• Advanced control system design.

• Disturbance rejection techniques.

• Simulation environment setup.

• Performance analysis methods.


## Challenges & Solutions
The primary challenge was transferring the complex mathematical notation from our class into working code with mujoco.
