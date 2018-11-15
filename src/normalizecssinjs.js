import { cssToJs, minifyCss } from '@j-kallunki/css-in-to-js';
import CsstoolsNormalize from '@csstools/normalize.css';

const defaultNormalize = () => CsstoolsNormalize;

export const normalizeCssInJs = ({
  normalize = defaultNormalize(),
  cssToString = false
} = {}) => cssToJs(minifyCss(normalize), { cssToString });

const reset = normalizeCssInJs();

export default reset;
