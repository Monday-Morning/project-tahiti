# Monday Morning Website Frontend Repository

  <p>
    <img src="https://img.shields.io/badge/client-React.js-blue" alt="react.js" />
    <img src="https://img.shields.io/badge/bundler-Webpack-blue" alt="webpack" />
    <img src="https://img.shields.io/badge/transcompiler-Babel-yellow" alt="Babel" />
    <img src="https://img.shields.io/badge/state-Redux-purple" alt="Redux" />  
    <img src="https://img.shields.io/badge/test-Jest-red" alt="Jest" />   
    <img src="https://img.shields.io/badge/test-Enzyme-green" alt="Enzyme" />  
    <img src="https://img.shields.io/badge/routing-React--Router--Dom-lightgrey" alt="React-Router-Dom" />  
    <img src="https://img.shields.io/badge/dynamic--loading-React--Loadable-red" alt="React Loadable" />  
    <img src="https://img.shields.io/badge/hmr-Hot--Module--Reload--Loadable-red" alt="HMR" />
    <img src="https://img.shields.io/badge/virtualization-Docker-blue" alt="Docker" />
  </p>

## Do not use NPM

- We use yarn as it is fast. Using npm will create unnecessary files which will cause issue during production.

## Start the dev server

1. Clone the directory `https://github.com/Monday-Morning/project-tahiti.git`
2. Change into the client directory `cd client`
3. Install the dependancies `yarn install`
4. Start the server `yarn start`
5. Run the tests `yarn test:watch`

## Start the documentation server

1. Change into the docs directory `cd docs`
2. Install the dependancies `yarn install`
3. Start the server `yarn start`

## Writing documentation for components

1. The docs folder contains the documentation code for all the components
2. Inside the docs folder, there is another folder named docs which contains markdown files for different components and screens
3. Add a markdown file with the component name and add the respective markdown for documentation.
4. Each markdown should start with a certain set of lines as described below. Add these lines to the file and then it is good to go for documentation.

```
---
id: onboardingScreen
title: Onboarding Component
sidebar_label: Onboarding
---
```

- The id that needs to be specified in the sidebars.js
- The title of the page
- The label that will be shown in the sidebar. 5. In the docs folder, there is a file named sidebars.js which determines the different categories on the documentation site.

```
module.exports = {
  someSidebar: {
    Onboarding: [
      'onboardingScreen',
      'welcomeStage',
      'verifyEmailStage',
      'selectTopicsStage',
      'newsletterStage',
    ],
    Features: ['mdx'],
  },
};
```

6. Add a new property with the name of the category below the Onboarding property.
7. Add the ids of all the markdown files that need to be under this category.
8. Save the file and the changes then can be seen in the documentation.
