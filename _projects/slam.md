---
layout: project
title: "SLAM Implementation"
subtitle: "Simultaneous Localization and Mapping"
project_date: "October 2024 - December 2024"
status: wip
domain: robotics
image: "/assets/images/SLAM.jpg"
has_github: true
github: "https://github.com/thajpo/SLAM_MH01"
---

## Overview
Developed a complete SLAM (Simultaneous Localization and Mapping) system from the ground up in Python, moving beyond the standard ROS abstractions used in robotics competitions to gain deeper understanding of the underlying principles. I used ORB features from the [ORB3 paper](https://github.com/UZ-SLAMLab/ORB_SLAM3), and I used some online resources to look into bundle adjustment, computer vision viewing angles, etc.

### What is SLAM? 
SLAM is an algorithm that allows the robot to map an enviornment. This is a fundamental problem in robotics, and as I got into implementing this I learned a lot... see the [dunning kruger effect](https://tapandesai.com/wp-content/uploads/2023/03/The-Dunning-Kruger-Effect.png) for my approximate learning process.



## Technical Details
• Implementation of core SLAM algorithms.

• Bundle adjustment optimization.

• Feature detection and matching.

• Loop closure detection.

• Performance optimization techniques.

• Complex data processing and storage pipeline.


<div class="tech-stack">
  <span class="tech-tag">Computer Vision</span>
  <span class="tech-tag">Python</span>
  <span class="tech-tag">NumPy</span>
  <span class="tech-tag">Linear Algebra</span>
  <span class="tech-tag">Optimization</span>
</div>

## Key Learnings
• Complex Python project architecture.

• Data pipeline management.

• Optimization techniques.

• Mathematical foundations of SLAM.


## Challenges & Solutions
The main challenge was implementing efficient bundle adjustment for large-scale mapping. The project focused on optimizing data storage and processing for Raspberry Pi deployment, though implementation of loop closure remains incomplete.

### Bundle Adjustment
Bundle adjustment is how the robot refines it's understanding of the scene. Mathematically, it is an optimization problem. Bundle adjustment itself is not hard, but managing all of the data efficently is. 

### Loop Closure:
Loop closure is an algorithm that allows the robot to 'close the loop' (know that it has been at a location before). This is really hard to do. I used ORB features to help the robot remember where it has been, but I was unable to get the loop closure to work.
