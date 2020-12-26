---
id: onboardingScreen
title: Onboarding Component
sidebar_label: Onboarding
---

This is the parent component/screen containing all the functions and logic to handle the Onboarding Screens.
The component renders a stage where all different onboarding screens/stages are rendered. The state 'stage' stores the current screen that is to be rendered.

## Stages

Stages is a one of the prime state handling the various onboarding screens. Following are the 4 onboarding stages

```
const STAGES = {
  WELCOME: 'welcome-stage',
  VERIFY_EMAIL: 'verify-email',
  INTERESTED_TOPICS: 'interested-topics',
  NEWSLETTER: 'newsletter-signup',
};
```

Each stage has a corresponding function to change the state to the respective stage. Here are the list of all the corresponding methods.

```
// Stage Change functions
  const setStageToWelcome = () => setStage(STAGES.WELCOME);
  const setStageToVerifyEmail = () => setStage(STAGES.VERIFY_EMAIL);
  const setStageToInterestedTopics = () => setStage(STAGES.INTERESTED_TOPICS);
  const setStageToNewsletter = () => setStage(STAGES.NEWSLETTER);
```

## Local States

All the information required in child components is stored in this component and managed from here. Following are all the local states used in this component

| Sr No. | Name                                  | Type     | Default        | Description                                                        |
| ------ | ------------------------------------- | -------- | -------------- | ------------------------------------------------------------------ |
| 1.     | [stage, setStage]                     | string   | STAGES.WELCOME | Handles the rendering for the different onboarding screens         |
| 2.     | [email, setEmail]                     | string   | ''             | Stores the verification email used in the verification stage       |
| 3.     | [isEmailVerified, setIsEmailVerified] | boolean  | false          | Handles the conditional rendering of content on verification stage |
| 4.     | [selectedTopics, setSelectedTopics]   | string[] | []             | Stores a list of all the selected topics by the user               |
| 5.     | [newsletterEmail, newsletterEmail]    | string   | ''             | Stores the email to which the user wants the newsletter subscribed |

## Functions

1. **onLogin()**

- Parameters:- null
- Description:- Google OAuth function used to login the user

2. **verifyEmail()**

- Parameters:- email: string
- Description:- Function to verify the email provided by the

3. **signupNewsletter()**

- Parameters:- email: string
- Description:- Function to signup the given email for newsletter

4. **addSelectedTopic()**

- Parameters:- topic: string
- Description:- Adds the topic to the selectedTopics array

5. **removeSelectedTopic()**

- Parameters:- topic: string
- Description:- Removes the topic from the selectedTopics array

6. **renderStages()**

- Parameters:- null
- Description:- Conditionally renders the different onboarding stages
