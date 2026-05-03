---
layout: project
title: "GNNs for Pose Anomaly Detection"
subtitle: "Detecting anomalies in human poses"
project_date: "January 2024 - May 2024"
status: done
domain: machine-learning
image: "/assets/images/GNN.jpg"
has_github: true
github: "https://github.com/thajpo/ChildAnomalyDetection"
---

## Overview
I worked under Xian Du in the [Intelligent Sensing Lab](https://websites.umass.edu/xiandu/) at UMass Amherst, where I received a grant from the [UMass Amherst Center for Research on Families](https://www.umass.edu/family/people/jason-pettinato) to research child safety monitoring. In this project, I investigated the use of Graph Neural Networks to detect anomalies in human poses. This approach was taken primarily to make the subjects of the training data anonymous (due to the sensitive nature of the subjects).

## Technical Details
• Preprocessed training and test set videos into a graph based representation.

• Designed and implemented a custom Graph Neural Network architecture integrating graph convolutional layers and attention mechanisms.

• Developed specialized loss functions and evaluation metrics to robustly distinguish between normal and anomalous poses.

• Applied data augmentation techniques and rigorous validation to mitigate noise and enhance model performance.

### Why not just use the raw video data?
I noticed that getting training data was really hard, so this was a way to help the model learn faster. There are two issues with this approach:
1. The estimated pose requires using a pose estimation network (errors propogate)

2. Changes in camera angle lead to very different pose graphs. I suspect this was the main issue with this approach.

<div class="tech-stack">
  <span class="tech-tag">Python</span>
  <span class="tech-tag">PyTorch Geometric</span>
  <span class="tech-tag">Graph Neural Networks</span>
  <span class="tech-tag">Deep Learning</span>
</div>

## Key Learnings
• Gained insight into representing complex human poses as graph structures.

• Learned to design and optimize custom GNN architectures tailored for anomaly detection.

• Enhanced skills in preprocessing non-Euclidean data and handling noisy real-world inputs.

• Improved iterative troubleshooting and model fine-tuning for deep learning applications.


## Challenges & Solutions
The primary challenge was developing an effective graph structure that could reliably capture the subtle variations in human poses, especially when dealing with different camera angles from the training data. This was addressed by experimenting with parameters to represent the viewing angle. Despite these efforts, some edge cases remained challenging to detect, pointing to opportunities for further refinement and future research.
