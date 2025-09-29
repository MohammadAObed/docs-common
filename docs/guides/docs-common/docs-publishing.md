---
sidebar_position: 4
---

# Docs Publishing

Follow these steps to get consistent builds, ship to GitHub Pages, and keep your docs live after every commit.

## 1. Use Yarn

Delete `package-lock.json` and execute `yarn install` so you generate a `yarn.lock` file if you dont have it already. You use `yarn` commands instead of `npm` from now on

## 2. Make sure the config is ready

- Make sure you added thing correctly in [docusaurus.config.ts](./docs-creation.md#addingmodifyingremoving-files-and-folders-after-install-with-the-template-generation)
- Update `docs/docusaurus.config.ts` so the deploy command knows where to publish.

> `+` = Add, `-` = Remove, `~` = Modify, lines without prefix = Keep/Modify context

```ts title="docusaurus.config.ts"
const config: Config = {
  // ...
  ~ url: SITE_URL,
  + baseUrl: `/${REPO}/`,
  + deploymentBranch: "gh-pages",
  // ...
};
```

## 3. Create workflows: `deploy.yml`

- At root of your project
  - Create `.github` folder
  - Inside it create `workflows` folder
  - Inside it create `deploy.yml` folder

Add these contents to the `deploy.yml` file:

```yml title="deploy.yml"
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

permissions:
  contents: write

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 22 # Update this version if you have a higher one
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Build website
        run: yarn build

      # Popular action to deploy to GitHub Pages:
      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # Build output to publish to the `gh-pages` branch:
          publish_dir: ./build
          # The following lines assign commit authorship to the official
          # GH-Actions bot for deploys to `gh-pages` branch:
          # https://github.com/actions/checkout/issues/13#issuecomment-724415212
          # The GH actions bot is used by default if you didn't specify the two fields.
          # You can swap them out with your own user credentials.
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

## 4. Build the project locally

To test the project before publishing, execute `yarn build` which will build the project and show any errors if any, so yuo dont wait for github pages to show errors or not figuring out why the deploy not working

## 6. Commit & Push Changes

In your code editor commit & push changes you made from the previous steps, the next step depends on it.

## 5. Change GitHub Repo Settings

- Go into browser into your repo here: `https://<your-username>/<your-repo-name>/`
- Go to Settings → Pages.
- Under Build and deployment, choose:
- Source: Deploy from a branch
- Branch: `gh-pages`, Folder /
  > 💡 `gh-pages` option should appear from the previous git push
- Save changes.

## 7. Access Your Website

Once the workflow runs successfully, your docs will be live at: `https://<your-username>.github.io/<your-repo-name>/`

How to check for workflow:

- Go into browser into your repo here: `https://<your-username>/<your-repo-name>/`
- Go to Actions
- You can see a workflow being processed, and the branch should be `main`, after its finished a new workflow will occur with branch `gh-pages`, after its successful you can view your website, just wait a minute after all workflows are done to see changes in the docs site

## 8. All Done

Now every time you push changes, the site will be updated automatically most of the time (if the content of the site actually has changed), this happens because of `deploy.yml`, it uses another branch `gh-pages` (we didn't create it, its created automatically), and force commit changes from `main` branch
