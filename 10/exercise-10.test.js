import { expect } from "chai";
import { getCoins } from "./exercise-10.js";

describe("getCoins", () => {
  it("should be defined as a function", () => {
    expect(getCoins).to.be.a("function");
  });

  it("should return the correct coins for 51 cents", () => {
    // 1 coin of 1 cent and 1 coin of 50 cents
    expect(getCoins(51)).to.deep.equal([1, 0, 0, 0, 0, 1]);
  });

  it("should return the correct coins for 3 cents", () => {
    // 1 coin of 1 cent and 1 coin of 2 cents
    expect(getCoins(3)).to.deep.equal([1, 1, 0, 0, 0, 0]);
  });

  it("should return the correct coins for 5 cents", () => {
    // 1 coin of 5 cents
    expect(getCoins(5)).to.deep.equal([0, 0, 1, 0, 0, 0]);
  });

  it("should return the correct coins for 16 cents", () => {
    // 1 coin of 1 cent, 1 coin of 5 cents, and 1 coin of 10 cents
    expect(getCoins(16)).to.deep.equal([1, 0, 1, 1, 0, 0]);
  });

  it("should return the correct coins for 100 cents", () => {
    // 2 coins of 50 cents
    expect(getCoins(100)).to.deep.equal([0, 0, 0, 0, 0, 2]);
  });

  it("should return all zeros for 0 cents", () => {
    expect(getCoins(0)).to.deep.equal([0, 0, 0, 0, 0, 0]);
  });

  it("should handle amounts that require multiple coin types", () => {
    // 1 coin of 1 cent, 1 coin of 2 cents, 1 coin of 5 cents, 1 coin of 10 cents, 1 coin of 20 cents, 1 coin of 50 cents
    expect(getCoins(88)).to.deep.equal([1, 1, 1, 1, 1, 1]);
  });

});
