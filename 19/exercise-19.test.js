import { expect } from 'chai';
import { learn } from './exercise-19.js';

describe('learn', () => {
  it('should be defined as a function', () => {
    expect(learn).to.be.a('function');
  });

  it('should return the best pair of courses that fits within the time limit', () => {
    expect(learn(10, [2, 3, 8, 1, 4])).to.deep.equal([0, 2]);
  });

  it('should return the pair of courses that maximizes the time without exceeding the limit', () => {
    expect(learn(15, [2, 10, 4, 1])).to.deep.equal([1, 2]);
  });

  it('should return the first valid pair if multiple pairs have the same maximum sum', () => {
    expect(learn(25, [10, 15, 20, 5])).to.deep.equal([0, 1]);
  });

  it('should avoid choosing a single course equal to the limit if two smaller ones fit better', () => {
    expect(learn(8, [8, 2, 1])).to.deep.equal([1, 2]);
  });

  it('should choose the pair that maximizes the available time when multiple options exist', () => {
    expect(learn(8, [8, 2, 1, 4, 3])).to.deep.equal([3, 4]);
  });

  it('should return null if no two courses fit within the available time', () => {
    expect(learn(4, [10, 14, 20])).to.equal(null);
  });

  it('should return null if all courses are too long even when repeated values exist', () => {
    expect(learn(5, [5, 5, 5])).to.equal(null);
  });

  it('should return null if there are less than two courses', () => {
    expect(learn(10, [5])).to.equal(null);
    expect(learn(10, [])).to.equal(null);
  });

  it('should return the pair with the largest possible sum when many small courses exist', () => {
    expect(learn(8, [1, 2, 3, 4])).to.deep.equal([2, 3]);
  });
});
