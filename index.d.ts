export interface NormalizeCssInJsProps {
  normalize?: string;
  cssToString?: boolean;
}
export type cssString = { [key: string]: string };
export declare const normalizeCssInJs: (
  props?: NormalizeCssInJsProps
) => cssString;
export declare const resetWithSelectors: (
  resets: cssString
) => (selectors: string | string[]) => string;
declare const reset: cssString;
export default reset;
