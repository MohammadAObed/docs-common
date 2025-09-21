---
sidebar_position: 5
---

# Docs vs Code Comments

## Purpose

- Keep our code clean, our docs useful, and both in sync.

## What goes in Docs

> 💡 Docs DON’T explain line-by-line code.

- Project intro, goals, and scope.
- Installation & setup (tooling, commands, CI).
- Folder & file purpose (architecture decisions).
- Workflows & conventions (naming, imports, tsconfig patterns).
- Usage guides for consumers (how to use features).
- Changelogs, migration notes, breaking changes.

## What goes in Code Comments (TSDoc/JSDoc)

> 💡 To explain line-by-line code.

- Public API surface (exports): purpose, params, returns, edge cases.
- “Why” something exists (non-obvious intent, constraints).
- Gotchas: perf, side effects, security, compatibility.
- Link back to deeper docs when needed.

Comments DON’T restate obvious code or duplicate docs.

```ts
/**
 * Converts px to rem using the provided base (default 16).
 * Returns a string like "1.25rem". Avoid for non-scaling UI tokens.
 * @param px - Pixel value to convert.
 * @param base - Root font size.
 */
export function pxToRem(px: number, base = 16): string {
  return `${px / base}rem`;
}
```

## Rules of Thumb

- Public exports: Always comment (TSDoc).
- Private helpers: Comment only if non-obvious.
- Keep it short: 1–3 lines for most items.
- Explain “why”, not “how”.
- Prefer self-descriptive names over comments.
- No duplication: Link from comments → docs (and vice versa) instead of repeating.

## Hygiene & Tooling

- Use TSDoc syntax so hover + TypeDoc work.
- Keep comments updated when code changes.
- PR checklist must include: “Updated comments/docs?”
- Run linters & type checks locally before commit.
