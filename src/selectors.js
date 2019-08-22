import { normalizeCssInJs } from './normalizecssinjs';

const selectorDeclaration = (selector, styles) =>
  `&${selector} {
    ${styles}
  }`;

const selectorsAndCss = resets => selector => {
  const styles = !!resets && resets[selector];
  return !!styles ? selectorDeclaration(selector, styles) : '';
};

/** Return resets of selector/s to be used with CSS-in-JS
 * @param {Object.<string, number>} resets normalize.cssinjs or similar (cssToString: true)
 * @returns {function(string\|string[]): string} selectors returns styles for given selectors
 */
export const resetWithSelectors = resets => selectors => {
  const styles = !!resets
    ? selectorsAndCss(resets)
    : selectorsAndCss(normalizeCssInJs({ cssToString: true }));
  if (Array.isArray(selectors) && selectors.length > 0) {
    return `
      ${selectors.map(s => styles(s)).join('')}
    `;
  }
  if (typeof selectors === 'string') {
    return styles(selectors);
  }
  return '';
};
