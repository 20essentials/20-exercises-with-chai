import { expect } from "chai";
import { maxProfit } from "./exercise-8.js";

describe("maxProfit()", () => {
  it("should be defined as a function", () => {
    expect(maxProfit).to.be.a("function");
  });

  it("should return the correct max profit (16) for [39, 18, 29, 25, 34, 32, 5]", () => {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
    expect(maxProfit(pricesBtc)).to.equal(16);
  });

  it("should return the correct max profit (60) when prices are strictly increasing", () => {
    const pricesEth = [10, 20, 30, 40, 50, 60, 70];
    expect(maxProfit(pricesEth)).to.equal(60);
  });

  it("should return -1 when prices are strictly decreasing", () => {
    const pricesDoge = [18, 15, 12, 11, 9, 7];
    expect(maxProfit(pricesDoge)).to.equal(-1);
  });

  it("should return -1 when all prices are the same", () => {
    const pricesAda = [3, 3, 3, 3, 3];
    expect(maxProfit(pricesAda)).to.equal(-1);
  });
});
