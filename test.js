const { expect } = require('chai');
const maxProfit = require('../maxProfit');

describe('maxProfit', () => {
  it('returns max profit for standard input', () => {
    expect(maxProfit([45, 24, 35, 31, 40, 38, 11])).to.equal(16);
  });

  it('returns -1 when no profit is possible', () => {
    expect(maxProfit([40, 35, 30, 20, 10])).to.equal(-1);
  });

  it('returns correct profit for increasing prices', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).to.equal(4);
  });

  it('returns -1 for empty or one-element arrays', () => {
    expect(maxProfit([])).to.equal(-1);
    expect(maxProfit([5])).to.equal(-1);
  });
});