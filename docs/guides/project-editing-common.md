---
sidebar_position: 3
---

# Project Editing - Common

## Typescript

Any ts error you encounter that you think is not correct, just open any ts file → restart typescript by ctrl+shift+p → type & click on `Restart TS Server`, it may fix the issue.

## Productivity

- Learn & use about this [productivity](../productivity.md) section
- Learn & use about the extensions you [installed](../installations.md#install-vscode-extensions) and use them, they are useful

## Folder structure

- Dont use index file for folders
- Use path aliases `@`, you can argue its cleaner & clearer to understand

## Other Notes

- dont shortcut variable names, use clear ones, you will forget them later if you dont
- Each time you add or modify a file, make it a habit to Add/Update TSDoc for it
- Dont ever code common code in your project, create a package so use it for all projects

## Commit Code to GitHub with Jira Issue Key

When you commit code to GitHub, in the commit message you can add the issue key (e.g., `PROJ`) to automatically link the commit to the Jira issue. You can also add an extra message by formatting it like this: `PROJ | What you did in the commit`.
