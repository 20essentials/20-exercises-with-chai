import { expect } from "chai";
import { missingReindeer } from "./exercise-14.js";

describe("missingReindeer", () => {
  it("should be defined as a function", () => {
    expect(missingReindeer).to.be.a("function");
  });

  it("should return the missing reindeer ID when it is in the middle of the sequence", () => {
    expect(missingReindeer([0, 2, 3])).to.equal(1);
  });

  it("should return 4 when the missing reindeer is in the middle of the list", () => {
    expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).to.equal(4);
  });

  it("should return the last ID when the sequence is complete except for the final number", () => {
    expect(missingReindeer([0, 1])).to.equal(2);
  });

  it("should return 2 when the missing reindeer is in between existing IDs", () => {
    expect(missingReindeer([3, 0, 1])).to.equal(2);
  });

  it("should return 8 when the missing reindeer is near the end of the list", () => {
    expect(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])).to.equal(8);
  });

  it("should return 1 when there is only one reindeer and it is ID 0", () => {
    expect(missingReindeer([0])).to.equal(1);
  });
});
