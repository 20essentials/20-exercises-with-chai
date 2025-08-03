import { expect } from "chai";
import { contarOvejas } from "./exercise-1.js";

describe("contarOvejas()", () => {
  it("should be defined as a function", () => {
    expect(contarOvejas).to.be.a("function");
  });

  it("should wrap multiple gifts with the correct number of asterisks", () => {
    const resultado = contarOvejas([
      { name: "Noa", color: "azul" },
      { name: "Euge", color: "rojo" },
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" },
      { name: "AAAAAaaaaa", color: "rojo" },
      { name: "Nnnnnnnn", color: "rojo" }
    ]);

    expect(resultado).to.deep.equal([
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" }
    ]);
  });
});
