import { expect } from 'chai';
import reset, { normalizeCssInJs } from './normalizecssinjs';
import CsstoolsNormalize from '@csstools/normalize.css';

const reset2 = normalizeCssInJs({
  normalize: CsstoolsNormalize,
  cssToString: true
});


describe('normalize.cssinjs', () => {
  it('Should be an object', () => {
    expect(reset).to.be.a('object');
    expect(reset2).to.be.a('object');
  });

  it('Should contain selectors', () => {
    const keys = Object.keys(reset);
    const keys2 = Object.keys(reset2);

    expect(keys).to.contain('html');
    expect(keys2).to.contain('html');
  });

  it('Should contain declarations', () => {
    const values = reset['html'];
    const values2 = reset2['html'];

    expect(values).to.be.a('object');
    expect(values[Object.keys(values)[0]]).to.be.a('string');

    expect(values2).to.be.a('string');
  });
});
