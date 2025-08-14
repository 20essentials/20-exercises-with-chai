import { expect } from "chai";
import { wrapGifts } from "./exercise-13.js";

describe("wrapGifts", () => {
  it("should be defined as a function", () => {
    expect(wrapGifts).to.be.a("function");
  });

  it("should wrap each gift with '*' borders for multiple single-character gifts", () => {
    expect(wrapGifts(["📷", "⚽️"])).to.deep.equal([
      "****",
      "*📷*",
      "*⚽️*",
      "****",
    ]);
  });

  it("should wrap gifts with multiple characters inside the border", () => {
    expect(wrapGifts(["🏈🎸", "🎮🧸"])).to.deep.equal([
      "******",
      "*🏈🎸*",
      "*🎮🧸*",
      "******",
    ]);
  });

  it("should wrap a single gift correctly", () => {
    expect(wrapGifts(["📷"])).to.deep.equal(["****", "*📷*", "****"]);
  });

  it("should return an empty array if no gifts are provided", () => {
    expect(wrapGifts([])).to.deep.equal([]);
  });

  it("should work when gifts contain spaces", () => {
    expect(wrapGifts(["A B", "C D"])).to.deep.equal([
      "*****",
      "*A B*",
      "*C D*",
      "*****",
    ]);
  });

  it("should handle gifts with special characters", () => {
    expect(wrapGifts(["@!", "#$"])).to.deep.equal([
      "****",
      "*@!*",
      "*#$*",
      "****",
    ]);
  });

  it("should handle gifts that are already long strings", () => {
    expect(wrapGifts(["HELLO", "WORLD"])).to.deep.equal([
      "*******",
      "*HELLO*",
      "*WORLD*",
      "*******",
    ]);
  });


});
