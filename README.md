# normalize.cssinjs

[![travis build](https://img.shields.io/travis/J-Kallunki/normalize.cssinjs.svg?style=flat-square)](https://travis-ci.org/J-Kallunki/normalize.cssinjs)
[![codecov coverage](https://img.shields.io/codecov/c/github/J-Kallunki/normalize.cssinjs.svg?style=flat-square)](https://codecov.io/github/J-Kallunki/normalize.cssinjs)
[![version](https://img.shields.io/npm/v/normalize.cssinjs.svg?style=flat-square)](http://npm.im/normalize.cssinjs)
[![downloads](https://img.shields.io/npm/dm/normalize.cssinjs.svg?style=flat-square)](http://npm-stat.com/charts.html?package=normalize.cssinjs&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/normalize.cssinjs.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Normalize.css in CSS-in-JS format. Uses other my library [css-in-to-js](https://github.com/J-Kallunki/css-in-to-js).

## Usage

```
yarn add normalize.cssinjs
OR
npm install --save normalize.cssinjs
```
```
import resets from 'normalize.cssinjs';
```

## Settings

### normalize

By default it uses [CSStools Normalize.css](https://github.com/csstools/normalize.css/) but you can provide your selected with:

```
import { normalizeCssInJs } from 'normalize.cssinjs';
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
