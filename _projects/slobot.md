---
layout: project
title: "SO-101 Open-Source Bimanual Arm"
card_subtitle: "Simulation and control setup for dual open-source robot arms across Genesis, MuJoCo, MJX, and Feetech hardware."
date: 2026-02-05
domain: robotics
image: "/assets/images/adaptive-arm.jpg"
has_github: true
github: "https://github.com/thajpo/slobot"
---

## Overview
A complex simulation and control setup for the open-source LeRobot SO-ARM-100 6 DOF robotic arm. This project aimed to create a robust bimanual robotic setup, specifically working with the Genesis simulator, Feetech motors, and MJX over ROCm to accurately randomize base positions via mocap bodies.

## Technical Details
- Implemented dual MuJoCo robotic arm environments (XML + Python)
- Engineered randomized reset logic and mocap-body tracking.
- Resolved JAX cross-platform configuration issues (ROCm/Metal hardware execution).
