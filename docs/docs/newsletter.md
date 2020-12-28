---
id: newsletterStage
title: Newsletter Stage Component
sidebar_label: Newsletter Stage
---

This is the Newsletter stage/screen used on the onboarding screen

## Props

**1. email**

- An Array containing a list of all the selected topics by the user.

**2. setEmail**

- A function to add the selected topic to the selectedTopics Array

**3. signupNewsletter**

- A function to remove the selected topic from the selectedTopics Array.

**4. onNext**

- A function to change the stage to the newsletter stage

## Local States

**1. [isSigned, setIsSigned]**

- A state used to conditionally render the content for this stage.
