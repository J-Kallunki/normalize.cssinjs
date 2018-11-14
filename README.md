# normalize.cssinjs

Normalize.css in CSS-in-JS format

## Usage

```
yarn add normalize.cssinjs
OR
npm install --save normalize.cssinjs
```
```
import normalizeCssInJs from 'normalize.cssinjs';
const resets = normalizeCssInJs();
```

## Settings

### normalize

By default it uses [CSStools Normalize.css](https://github.com/csstools/normalize.css/) but you can provide your selected with:

```
import cssString from "!raw-loader!normalize.css"
const resets = normalizeCssInJs({ normalize: cssString })
```
(or use something like babel-plugin-inline-import)

### cssToString

If you wan't to get CSS-declarations in CSS-string format use:
```
const resets = normalizeCssInJs({ cssToString: true })
```

## Tools

### `minifyCss()`

Minify CSS-string

### `cssToJs(cssString, { cssToString: false })`

Convert any CSS-string to styled-format object or object with CSS-declarations as string.

## Acknowledgements

Uses [CleanCSS](https://github.com/jakubpawlowicz/clean-css) for cleaning up the CSS and [PostCSS](https://github.com/postcss/postcss) for parsing the CSS.

normalize.css is a project by [Jonathan Neal](https://github.com/jonathantneal), co-created with [Nicolas Gallagher](https://github.com/necolas).