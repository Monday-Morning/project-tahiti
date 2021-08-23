<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url] -->

<br />
<p align="center">
  <a href="https://github.com/Monday-Morning/project-tahiti">
    <img src="repoImages/logo.png" alt="Monday Morning Logo" width="130">
  </a>

  <h3 align="center">Monday Morning</h3>

  <p align="center">
    The official student media body of NIT Rourkela
    <br />
    <br />
    <a href="https://mondaymorning.nitrkl.ac.in">View Live</a>
    ·
    <a href="https://github.com/Monday-Morning/project-tahiti/issues">Report Bugs</a>
    .
    <a href="https://github.com/Monday-Morning/project-tahiti/issues">Add Features</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-monday-morning">About Monday Morning</a></li>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#contribution-guidlines">Contribution guidlines</a></li>
        <li><a href="#local-repository-setup">Local Repository Setup</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

## About Monday Morning

[![Monday Morning][repo-cover]](https://mondaymonrning.nitrkl.ac.in)

Monday Morning is the student media body of National Institute of Technology, Rourkela. Since its inception in 2006, it has constantly served as a vital link between the student community and the administration. The weekly e-newsletter serves as a news feed for the students, professors and alumni of the institute, featuring campus activities, department updates, recruitment information, SAC happenings, alumni news, weekly polls and interviews of the Director, Chief Warden, professors, distinguished alumni and dignitaries and exceptional students. Apart from the online weekly edition, Monday Morning also publishes print editions and organises the Open House Discussion.

## About the Project

[![Monday Morning Home Screen][home-screen]](https://mondaymonrning.nitrkl.ac.in)

Project Infinity is about updating the Monday Morning website using modern technologies which is divided accross 3 main sub-projects.

1. [project-tahiti](https://github.com/Monday-Morning/project-tahiti): The Client side application of the website.
1. [project-reclamation](https://github.com/Monday-Morning/project-tahiti): The Server application of the website.
1. [project-pegasus](https://github.com/Monday-Morning/project-tahiti): The cross-platform Mobile application of the Monday Morning.

## Built With

Following technologies and libraries are used for the development of this website

- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Material-UI](https://material-ui.com/)
- [Firebase](https://firebase.google.com/)

## Getting Started

To setup the project locally follow the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)

```sh
  # Homebrew
  brew install nodejs

  # Sudo apt
  sudo apt install nodejs

  # Packman
  pacman -S nodejs

  # Module Install
  dnf module install nodejs:<stream> # stream is the version

  # Windows (chocolaty)
  cinst nodejs.install

```

- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

```sh
  npm install --global yarn
```

- [Git](https://git-scm.com/downloads)

```sh
  # Homebrew
  brew install git

  # Sudo apt
  apt-get install git

  # Packman
  pacman -S git

  # Module Install (Fedora)
  dnf install git

```

### Contribution guidlines 🎃

NOTE 1: Please abide by the [Contributing Guidelines](https://github.com/Monday-Morning/project-tahiti/blob/master/CONTRIBUTING.md).

NOTE 2: Please abide by the [Code of Conduct](https://github.com/Monday-Morning/project-tahiti/blob/master/CODE_OF_CONDUCT.md).

### Local Repository Setup

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your local system
3.  **Commit** changes to your own separate branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull request** so that we can review your changes

### Running the project.

The project uses Yarn and not NPM. It is strictly advised to stick with Yarn so as to avoid dependency conflicts down the line. After cloning the fork repo, follow the give steps.

```
## Checkout into the project client directory
cd client

## Install Dependencies
yarn install

## Run the Project
yarn develop

```

Following are the commands to remove/add new dependencies using yarn

```
## Add a new Package
yarn add package_name

## Remove an existing Package
yarn remove package_name

## Save Package as a Dev Dependency
yarn add -D package_name
```

## License

Distributed under the MIT License. See [`License`](license-url) for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Monday-Morning/project-tahiti?style=for-the-badge
[contributors-url]: https://github.com/Monday-Morning/project-tahiti/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Monday-Morning/project-tahiti?style=for-the-badge
[forks-url]: https://github.com/Monday-Morning/project-tahiti/network/members
[stars-shield]: https://img.shields.io/github/stars/Monday-Morning/project-tahiti?style=for-the-badge
[stars-url]: https://github.com/Monday-Morning/project-tahiti/stargazers
[issues-shield]: https://img.shields.io/github/issues/Monday-Morning/project-tahiti?style=for-the-badge
[issues-url]: https://github.com/Monday-Morning/project-tahiti/issues
[license-shield]: https://img.shields.io/github/license/Monday-Morning/project-tahiti?style=for-the-badge
[license-url]: https://github.com/Monday-Morning/project-tahiti/blob/main/LICENSE.txt
[home-screen]: repoImages/homeScreen.png
[repo-cover]: repoImages/cover.png
[repo-logo]: repoImages/logo.png
