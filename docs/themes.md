---
previous: /usage.md
next: false
---

# Themes

Splitterino allows you to create custom Templates which define the layout and styling.
As splitterino is based on [Vue](https://vuejs.org) and [Electron](https://electronjs.org/),
you write your Template in a VueJS HTML Template and your Styling in CSS.

## Theme Structure

Theme Files, are a `tar`-archive with the custom extension `.psplt` (*packaged splitterino-template*) specific files in it:
- `meta.json`
- `template.html`
- `styles.css`

### Meta

The Meta file holds the information of the theme and looks like this:

```json
{
    "author": "PreFiXAUT",
    "name": "My Awesome Template",
    "version": "0.1.0",
    "splitterinoVersion": "0.1.1"
}
```

- `author`: Author of the theme
- `name`: Name of the theme
- `version`: Version of the theme
- `splitterinoVersion`: Minimal Version of splitterino this theme is compatible with

### Template

As mentioned in the beginning, templates are written in the VueJS Template format.

> You can read up on [VueJS Templates here](https://vuejs.org/v2/guide/syntax.html)

**IMPORTANT**: You can **not** include any `<script>` or `<style>` tags, as these will
break your template.

### Styles

Styles are simply written in plain CSS.
If you want to use any pre-compilers such as SASS, you'll just have to include
the build CSS file to the archive.
