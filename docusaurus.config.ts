import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type { PluginOptions } from "@easyops-cn/docusaurus-search-local";
import { themes as prismThemes } from "prism-react-renderer";

const ORG = "MohammadAObed";
const REPO = "docs-common";
const SITE_URL = "https://MohammadAObed";

const config: Config = {
  title: REPO,
  tagline: "Your shared programming knowledge hub",
  favicon: "img/favicon.ico",
  future: { v4: true },
  url: SITE_URL,
  baseUrl: "/",
  organizationName: ORG,
  projectName: REPO,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/${ORG}/${REPO}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ["rss", "atom"], xslt: true },
          editUrl: `https://github.com/${ORG}/${REPO}/tree/main/`,
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "img/social-card.png",
    navbar: {
      title: REPO,
      logo: {
        alt: REPO + " logo",
        src: "img/logo.png",
      },
      items: [
        { type: "docSidebar", sidebarId: "tutorialSidebar", position: "left", label: "Docs" },
        { to: "/blog", label: "Blog", position: "left" },
        { label: "Packages", position: "left", items: [{ to: "/docs/packages/config/get-started", label: "config" }] },
        { href: `https://github.com/${ORG}`, label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "docs",
          items: [
            { label: "Getting Started", to: "/docs/get-started" },
            { label: "Installations", to: "/docs/installations" },
            { label: "Configurations", to: "/docs/configurations" },
            { label: "Productivity", to: "/docs/productivity" },
            { label: "Guides", to: "/docs/category/guides" },
          ],
        },
        {
          title: "Packages",
          items: [{ label: "config", to: "/docs/packages/config/get-started" }],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "GitHub", href: `https://github.com/${ORG}` },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} OPMO, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "dark",
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      } satisfies PluginOptions,
    ],
  ],
};

export default config;
