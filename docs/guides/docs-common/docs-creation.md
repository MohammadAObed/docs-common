---
sidebar_position: 1
---

# Docs Creation

Follow the installation instructions only in the official [docusaurus](https://docusaurus.io/docs/installation) docs

- Make sure to select the create command with typescript

## Quick Hack

- Stage the changes of your project after you installed and a template has been generated.
- Then you can open the [docs-common](https://github.com/MohammadAObed/docs-common) repo, then copy paste each content of mostly all files to your project.
  > 💡 Before copying code, save the file you will paste into first, so Prettier does its thing and Git changes look clearer.
- Then check whats different and keep the changes, just double check for any unintended changes like changing the names, copying files of the docs, changing the package-lock etc...

## Installation Others

- Install an [npm package](https://docusaurus.io/community/resources#search) for search within docs functionality
- One package that works and offline: `npm install --save @easyops-cn/docusaurus-search-local`

## Adding/Modifying/Removing Files and folders after install with the template generation

### docusaurus.config.js

- Remove all comments inside this folder!

> `+` = Add, `-` = Remove, `~` = Modify, lines without prefix = Keep/Modify context

```ts
+ import type { PluginOptions } from "@easyops-cn/docusaurus-search-local";

+ const ORG = "MohammadAObed"; //github org/user name
+ const REPO = "docs-common"; //github repo name
+ const SITE_URL = "https://[your-docs]"; //Site that will host the docs
+ const GITHUB_URL = `https://github.com/${ORG}/config`;

const config: Config = {
  ~ title: REPO,
  ~ tagline: "Text that will appear at the front page",
  ~ url: SITE_URL,
  ~ organizationName: ORG,
  ~ projectName: REPO,

  presets: [
    [
      {
        docs: {
          ~ editUrl: `https://github.com/${ORG}/${REPO}/tree/main/`,
        },
        blog: {
          ~ editUrl: `https://github.com/${ORG}/${REPO}/tree/main/`,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    ~ image: "img/social-card.png",
    navbar: {
      ~ title: REPO,
      logo: {
        ~ alt: REPO + " logo",
        ~ src: "img/logo.png",
      },
      ~ items: [
        //Delete all existing items, and add the following
        + { type: "docSidebar", sidebarId: "tutorialSidebar", position: "left", label: "Docs" },
        + { href: GITHUB_URL, label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      ~ links: [
        //Delete all existing links, and add the following
        + {
          title: "docs",
          items: [{ label: "Getting Started", to: "/docs/get-started" }],
        },
        + {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "GitHub", href: GITHUB_URL },
          ],
        },
      ],
      ~ copyright: `© ${new Date().getFullYear()} OPMO, Inc. Built with Docusaurus.`, //replace My Project with your project name or whatever
    },
    + colorMode: {
      defaultMode: "dark",
    },
  } satisfies Preset.ThemeConfig,
  + themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      } satisfies PluginOptions,
    ],
  ],
};
```

### static folder

- Remove all files inside it
- Add your own files:
  - `logo.png` - your project logo
  - `social-card.png` - the image that will appear when you share the site link on social media
  - `favicon.ico` - the icon that will appear in the browser tab

> 💡 You can use [favicon.io](https://favicon.io/favicon-generator/) to generate all files above

### docs folder

- Remove all files inside it
- Add your own files, at least one is required for the docs to appear:
  - `get-started.md` - a sample, e.g.:

```md
---
sidebar_position: 1
---

# Get Started
```

### blog folder

- Remove all files inside it
- Add your own files:
  - `yyyy-mm-dd-personal-notes.mdx` - a sample, e.g.:

```mdx
---
slug: personal-notes
title: Personal Notes
authors: [obed]
tags: [notes]
---
```

- `authors.yml` - add your own authors - e.g.:

```yml
obed:
  name: Mohammad Obed
  title: Coder
  url: https://www.linkedin.com/in/mohammad-obed
  image_url: https://github.com/MohammadAObed.png
  page: true
  socials:
    linkedin: mohammad-obed
    github: MohammadAObed
```

- `tags.yml` - add your own tags, - e.g.:

```yml
notes:
  label: Notes
  permalink: /notes
  description: any in-direct notes to the standard way of docs
```

### src folder

#### css/custom.css

- Add the following content:

```css
.top-divider {
  border-top: 1px solid var(--ifm-color-emphasis-200);
  margin-top: 10px;
  padding-top: 10px;
}
```

#### components/HomepageFeatures/index.tsx

- Replace the content of the file with the following:

```tsx
import Heading from "@theme/Heading";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Card 1",
    description: (
      <>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>
    ),
  },
  {
    title: "Card 2",
    description: (
      <>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>
    ),
  },
  {
    title: "Card 3",
    description: (
      <>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={styles.mx400}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
```

#### components/HomepageFeatures/style.module.css

- Replace the content of the file with the following:

```css
main {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.features {
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}

.feature {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}

.featureHidden {
  height: 50px;
  width: 200px;
}

.mx400 {
  max-width: 400px;
}
```

#### pages folder

- Remove `markdown-page.md` file
- Modify `index.tsx` file content with the following:

> `+` = Add, `-` = Remove, `~` = Modify, lines without prefix = Keep/Modify context

```tsx
- <Link className="button button--secondary button--lg" to="/docs/intro">
-   Docusaurus Tutorial - 5min ⏱️
- </Link>

+ <Link className="button button--secondary button--lg" to="/docs/get-started">
+     Get Started
+ </Link>

~ <Layout title={siteConfig.title} description={siteConfig.tagline}>
```
