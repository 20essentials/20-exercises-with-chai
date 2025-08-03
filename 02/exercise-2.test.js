import { expect } from "chai";
import { listGifts } from "./exercise-2.js";

describe("listGifts()", () => {
  it("should be defined as a function", () => {
    expect(listGifts).to.be.a("function");
  });

  it("should count gifts correctly and ignore those starting with underscore", () => {
    const carta = "bici coche balón _playstation bici coche peluche";
    const expected = {
      bici: 2,
      coche: 2,
      balón: 1,
      peluche: 1,
    };
    expect(listGifts(carta)).to.deep.equal(expected);
  });

  it("should return an empty object if all gifts start with underscore", () => {
    const carta = "_regalo1 _regalo2 _regalo3";
    expect(listGifts(carta)).to.deep.equal({});
  });

  it("should handle extra spaces and trim them correctly", () => {
    const carta = "   bici     coche     bici   ";
    const expected = {
      bici: 2,
      coche: 1,
    };
    expect(listGifts(carta)).to.deep.equal(expected);
  });

  it("should treat similar gift names with underscores correctly", () => {
    const carta = "oso _oso oso _oso";
    const expected = {
      oso: 2,
    };
    expect(listGifts(carta)).to.deep.equal(expected);
  });

  it("should treat different gifts as case-sensitive", () => {
    const carta = "Bici bici BICI";
    const expected = {
      Bici: 1,
      bici: 1,
      BICI: 1,
    };
    expect(listGifts(carta)).to.deep.equal(expected);
  });
});
