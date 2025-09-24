---
sidebar_position: 2
---

# Docs Editing

## Add a divider between sidebar items

Make sure you followed the [Docs Creation Guide](./docs-creation.md#src-folder) first.

> 💡 This is for an auto-generated sidebar, which is the default

To add a divider between sidebar items, you can use a custom CSS class called `top-divider` that will add a border-top to the sidebar item, or `bottom-divider`.

- For a folder with _category_.json, add the following property:

```json
{
  "className": "top-divider"
}
```

- For a file, add the following frontmatter at the top of the file:

```yaml
---
sidebar_class_name: "top-divider"
---
```

## Put items at the bottom of the sidebar

Use fixed-position utility classes on sidebar items you want anchored near the footer. Apply `sidebar_class_name: "bottom-placed-X"` to the doc front matter where `X` is the slot you need.

```json
{
  "className": "bottom-placed-1"
}
```

- For a file, add the following frontmatter at the top of the file:

```yaml
---
sidebar_class_name: "bottom-placed-1"
---
```
