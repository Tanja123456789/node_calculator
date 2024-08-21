import exp from './../../src/modules/calculation/util/exp';
import gcd from './../../src/modules/calculation/util/gcd';

describe('exp', () => {
  it('should return the correct result', () => {
    expect(exp(3, 4)).toBe(81);
    expect(exp(5, 5)).toBe(3125);
    expect(exp(5, 0)).toBe(1);
    expect(exp(-3, 3)).toBe(-27);
  });
});


describe('gcd', () => {
  it('should return the correct GCD', () => {
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(-48, 18)).toBe(6);
    expect(gcd(20, 20)).toBe(20);
  });
});