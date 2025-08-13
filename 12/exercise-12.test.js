import { expect } from "chai";
import { getMinJump } from "./exercise-12.js";

describe("getMinJump", () => {
  it("should be defined as a function", () => {
    expect(getMinJump).to.be.a("function");
  });

  it("should return 4 when given [5, 3, 6, 7, 9]", () => {
    expect(getMinJump([5, 3, 6, 7, 9])).to.be.equal(4);
  });

  it("should return 4 when given [1, 2, 3, 5]", () => {
    expect(getMinJump([1, 2, 3, 5])).to.be.equal(4);
  });

  it("should return 7 when given [2, 4, 6, 8, 10]", () => {
    expect(getMinJump([2, 4, 6, 8, 10])).to.be.equal(7);
  });

  it("should return 2 when given [3, 7, 5]", () => {
    expect(getMinJump([3, 7, 5])).to.be.equal(2);
  });

  it("should return 2 when given [9, 5, 1]", () => {
    expect(getMinJump([9, 5, 1])).to.be.equal(2);
  });
});
