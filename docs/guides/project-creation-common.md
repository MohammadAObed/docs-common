---
sidebar_position: 1
---

# Project Creation - Common

## Create a New Repository on GitHub

- Go to [github.com](https://github.com/) and log in.
- Click the **+** icon (top right) → **New repository**.
- Enter a repository name, description, and choose visibility (public/private).
- Add a (Ignore if it'll be added later) README, (Optional) .gitignore, (Optional) license.
- Click **Create repository**.

## Clone the Repository in VS Code Using Git Bash

- Copy the repository’s **HTTPS** URL from GitHub.
- Open **VS Code** and launch a - [Git Bash Terminal](../configurations#vscode-configurations).
- Navigate to the folder where you want to clone the repo:
  ```
  cd path/to/your/projects
  ```
- Run:
  ```
  git clone https://github.com/your-username/your-repo-name.git
  ```
- Open the cloned folder in VS Code:
- **File → Open Folder...** and select your repo folder.

## Integrate Your Repository with Jira Atlassian

### Create a new Jira project

- Go to [Jira](https://moslns.atlassian.net/jira/settings/projects/manage) and log in.
- Click **Projects → Create project**.
- Choose a project template (e.g., Kanban)
- Choose a name, and the key its the first letters of each word capitalized
- Choose github integration and select your repository (if it this step does not appear dont worry, keep going).
- Follow the setup wizard if there is more.

### Connect your GitHub repository

- In your Jira project, go to **Project settings → Integrations → GitHub**.
  - Follow the prompts to connect your GitHub account and select your repository.
  - Once connected, you can link Jira issues to GitHub commits and pull requests for improved project tracking.

### Jira Project Settings

- On **Board**, click on plus icon to add a new column called Pending
- (Optional) For **Board**: Change the view from group to sub-task
- Go to Project settings:
  - set automatic assignee to project lead
  - add missing issue types (Bug, Story)
- Then you can [Open Jira Tasks Directly in VS Code](../configurations#open-jira-tasks-directly-in-vs-code)

## Typescript

- In any project you work on with typescript, open any ts file in it then do the following:
  - first hit ctrl+shift+p → type `select typescript version` → select the workspace version → again hit ctrl+shift+p → type & click on restart typescript
- Any ts error you encounter that you think is not correct, just restart typescript by ctrl+shift+p → type & click on `Restart TS Server`

## .gitignore

add this to the .gitignore file:

```.gitignore
# Docs
/docs
```

## Reference Projects

Below are npm packages to use in your projects the same way you use and install npm packages like lodash, react, expo, etc.., they are helpers to your projects.

Below are links to various packages/projects hosted on GitHub. Each project covers different technologies and use cases, with detailed README files explaining setup and implementation. Explore these repositories to learn how to use them as starting points for your own projects or build similar solutions.

- [Configuration & Development Common](https://github.com/MohammadAObed/config/blob/main/README.md)
- [TypeScript Common](https://github.com/MohammadAObed/typescript-common/blob/main/README.md)
- [React Common](https://github.com/MohammadAObed/react-common/blob/main/README.md)
- [React JS Common](https://github.com/MohammadAObed/reactjs-common/blob/main/README.md)
- [React Native Common](https://github.com/MohammadAObed/react-native-common/blob/main/README.md)

Note: if you are working on many of those projects, or a project that uses them, and you modify them on the go based on your project criteria, then its better to create a vs code workspace for them, after of course doing the git sparse thing, so you can open them all at once and work on them together.
