import { expect } from "chai";
import { fixFiles } from "./exercise-18.js";

describe("fixFiles", () => {
  it("should be defined as a function", () => {
    expect(fixFiles).to.be.a("function");
  });

  it("should add suffixes to repeated file names", () => {
    const files = ["photo", "postcard", "photo", "photo", "video"];
    const result = ["photo", "postcard", "photo(1)", "photo(2)", "video"];
    expect(fixFiles(files)).to.deep.equal(result);
  });

  it("should handle multiple repetitions of different files", () => {
    const files = ["file", "file", "file", "game", "game"];
    const result = ["file", "file(1)", "file(2)", "game", "game(1)"];
    expect(fixFiles(files)).to.deep.equal(result);
  });

  it("should correctly handle files that already contain (1)", () => {
    const files = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
    const result = ["file", "file(1)", "icon", "icon(1)", "icon(1)(1)"];
    expect(fixFiles(files)).to.deep.equal(result);
  });

  it("should return an empty array when given no files", () => {
    expect(fixFiles([])).to.deep.equal([]);
  });

  it("should return the same list when all file names are unique", () => {
    const files = ["a", "b", "c"];
    expect(fixFiles(files)).to.deep.equal(["a", "b", "c"]);
  });

  it("should handle long chains of duplicates correctly", () => {
    const files = ["a", "a", "a", "a", "a"];
    const result = ["a", "a(1)", "a(2)", "a(3)", "a(4)"];
    expect(fixFiles(files)).to.deep.equal(result);
  });

  it("should handle interleaved duplicates correctly", () => {
    const files = ["a", "b", "a", "b", "a", "b"];
    const result = ["a", "b", "a(1)", "b(1)", "a(2)", "b(2)"];
    expect(fixFiles(files)).to.deep.equal(result);
  });

  it("should handle files with existing suffixes other than (1)", () => {
    const files = ["song", "song(2)", "song"];
    const result = ["song", "song(2)", "song(1)"];
    expect(fixFiles(files)).to.deep.equal(result);
  });

  it("should handle file names containing parentheses not related to suffixes", () => {
    const files = ["data(backup)", "data(backup)", "data"];
    const result = ["data(backup)", "data(backup)(1)", "data"];
    expect(fixFiles(files)).to.deep.equal(result);
  });
});
