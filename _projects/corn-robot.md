---
layout: project
title: "Corn Monitoring Robot"
subtitle: "Autonomous agricultural monitoring system"
project_date : "August 2023 - May 2024"
status: done
domain: robotics
starred: true
star_rank: 5
image: "/assets/images/corn-robot-photo.jpg"
header_image: "/assets/images/corn-robot-photo.jpg"
has_github: false
---

## Overview
This was my senior capstone project, where I was the analysis lead (CAD, programming). We worked on the development of an autonomous robot for monitoring corn plants in a greenhouse. Used for research purposes by the Bartlett Lab at UMass Amherst. The design is heavily inspired by the Ender-3 printer, but there were unique challenges we faced when optimizing between portability, costs, and vertical travel.

## Technical Details
• Autonomous movement system design.

• Data collection pipeline for remote image access.

• Robust mechanical design done in Solid Works.

• Custom coupler mechanism for vertical movement.

• Rotating base design for multi-angle imaging.


### Coupler Mechanism
The coupler mechanism enables the stepper motor for x movement to be coupled to our lead screw for vertical movements. 

### Rotating Base Design
The rotating base was implemented to capture multiple angles of plant data. Rather than implementing a more complex polar movement system or additional axis, we designed a rotating platform that the plant sits on. This solution enables data capture from multiple angles, particularly useful when leaves occlude the camera view.

<div class="image-gallery">
  <img src="{{ '/assets/images/corn-robot-coupler.png' | relative_url }}" alt="Coupler Mechanism">
  <img src="{{ '/assets/images/corn-robot-rotating-base.png' | relative_url }}" alt="Rotating Base">
  <img src="{{ '/assets/images/corn-robot-plant.jpg' | relative_url }}" alt="Corn Plant">
  <img src="{{ '/assets/images/corn-robot-drawing.png' | relative_url }}" alt="Corn Monitoring Robot Drawing">
</div>
<div class="tech-stack">

  <span class="tech-tag">Robotics</span>

  <span class="tech-tag">Python</span>
  <span class="tech-tag">Mechanical Design</span>
  <span class="tech-tag">SolidWorks</span>
</div>

## Key Learnings
• Robotics system integration

• Environmental considerations

• Mechanical design principles

• Autonomous navigation

• Collaborative design process


## Challenges & Solutions
The largest challenges were not being able to order our parts early! I learned the valuable importance of being able to get started on a project and build fast.

The hardest engineering challenge was serial communication and electrical interference issues that we resolved by many hours of debugging and testing different parts of the system.
