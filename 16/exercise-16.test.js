import { expect } from 'chai';
import { decodeNumbers } from './exercise-16.js';

describe('decodeNumbers', () => {
  it('should be defined as a function', () => {
    expect(decodeNumbers).to.be.a('function');
  });

  it('should decode "." as 1, so "..." equals 3', () => {
    expect(decodeNumbers('...')).to.be.equal(3);
  });

  it('should decode ".,", where ","=5 and "."=1 → 5 - 1 = 4', () => {
    expect(decodeNumbers('.,')).to.be.equal(4);
  });

  it('should decode ",.", where ","=5 and "."=1 → 5 + 1 = 6', () => {
    expect(decodeNumbers(',.')).to.be.equal(6);
  });

  it('should decode ",...", where ","=5 and "..."=3 → 5 + 3 = 8', () => {
    expect(decodeNumbers(',...')).to.be.equal(8);
  });

  it('should decode ".........!", combining nine "." and one "!" → (8×1 -1) + 100 = 107', () => {
    expect(decodeNumbers('.........!')).to.be.equal(107);
  });

  it('should decode ".;", where ";"=50 and "."=1 → 50 - 1 = 49', () => {
    expect(decodeNumbers('.;')).to.be.equal(49);
  });

  it('should decode "..,", where ".."=2 and ","=5 → (-1 + 1) + 5 = 5', () => {
    expect(decodeNumbers('..,')).to.be.equal(5);
  });

  it('should decode "..,!", where ".."=2, ","=5, "!"=100 → 1 - 1 - 5 + 100 = 95', () => {
    expect(decodeNumbers('..,!')).to.be.equal(95);
  });

  it('should decode ".;!", where "."=1, ";"=50, "!"=100 → -1 - 50 + 100 = 49', () => {
    expect(decodeNumbers('.;!')).to.be.equal(49);
  });

  it('should decode "!!!" as 100 + 100 + 100 = 300', () => {
    expect(decodeNumbers('!!!')).to.be.equal(300);
  });

  it('should decode ";!" as 50 + 100 = 150, but applying subtraction rule gives 50', () => {
    expect(decodeNumbers(';!')).to.be.equal(50);
  });

  it('should return NaN for invalid characters, e.g. ";.W"', () => {
    expect(decodeNumbers(';.W')).to.be.NaN;
  });
});
