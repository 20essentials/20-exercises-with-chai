import { expect } from 'chai';
import { checkSledJump } from './exercise-15.js';

describe('checkSledJump', () => {
  it('should be defined as a function', () => {
    expect(checkSledJump).to.be.a('function');
  });

  it('should return true for a valid jump with a clear peak [1, 2, 3, 2, 1]', () => {
    expect(checkSledJump([1, 2, 3, 2, 1])).to.be.true;
  });

  it('should return true for a simple up and down sequence [0, 1, 0]', () => {
    expect(checkSledJump([0, 1, 0])).to.be.true;
  });

  it('should return true for a longer valid peak [0, 3, 2, 1]', () => {
    expect(checkSledJump([0, 3, 2, 1])).to.be.true;
  });

  it('should return true for a steep peak [0, 1000, 1]', () => {
    expect(checkSledJump([0, 1000, 1])).to.be.true;
  });

  it('should return false when the ascent is not strictly increasing [2, 4, 4, 6, 2]', () => {
    expect(checkSledJump([2, 4, 4, 6, 2])).to.be.false;
  });

  it('should return false when the sequence only goes up without descending [1, 2, 3]', () => {
    expect(checkSledJump([1, 2, 3])).to.be.false;
  });

  it('should return false when the sequence goes up, down, and then up again [1, 2, 3, 2, 1, 2, 3]', () => {
    expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).to.be.false;
  });
});
