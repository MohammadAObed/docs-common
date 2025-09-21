---
sidebar_position: 2
---

# Docs Editing

## Add a divider between sidebar items

Make sure you followed the [Docs Creation Guide](./docs-creation.md#src-folder) first.

> 💡 This is for an auto-generated sidebar, which is the default

To add a divider between sidebar items, you can use a custom CSS class called `top-divider` that will add a border-top to the sidebar item.

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
