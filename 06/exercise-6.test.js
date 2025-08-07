import { expect } from "chai";
import { sumPairs } from "./exercise-6.js";

describe("sumPairs()", () => {
  it("should be defined as a function", () => {
    expect(sumPairs).to.be.a("function");
  });

  it("should return the first pair that adds up to the target", () => {
    expect(sumPairs([3, 5, 7, 2], 10)).to.deep.equal([3, 7]);
  });

  it("should return null when no valid pair exists", () => {
    expect(sumPairs([-3, -2, 7, -5], 10)).to.equal(null);
  });

  it("should return the first pair found in order that adds up to the target", () => {
    expect(sumPairs([2, 2, 3, 1], 4)).to.deep.equal([2, 2]);
  });

  it("should return the earliest valid pair when multiple exist", () => {
    expect(sumPairs([6, 7, 1, 2], 8)).to.deep.equal([6, 2]);
  });

  it("should return the pair that appears first in order of appearance", () => {
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).to.deep.equal([1, 5]);
  });
});
