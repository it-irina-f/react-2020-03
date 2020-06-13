import { parser } from "./parser";
import { isNumber } from "./helpers";
import { mathOperators, mathUnoOperators } from "./mathOperators";

describe("Parser correct cases", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });

  it("2 **", () => {
    expect(parser("2 **")).toEqual([2, "**"]);
  });

  it("3 !", () => {
    expect(parser("3 !")).toEqual([3, "!"]);
  });

  it("2 ^ 3", () => {
    expect(parser("2 ^ 3")).toEqual([2, "^", 3]);
  });

  it("2 ** + 3", () => {
    expect(parser("2 ** + 3")).toEqual([2, "**", "+", 3]);
  });

  it("2 + 3 ! * 7", () => {
    expect(parser("2 + 3 ! * 7")).toEqual([2, "+", 3, "!", "*", 7]);
  });

  it("2 + 3 ! * 7 - 2 ^ 3 / 3 **", () => {
    expect(parser("2 + 3 ! * 7 - 2 ^ 3 / 3")).toEqual([
      2,
      "+",
      3,
      "!",
      "*",
      7,
      "-",
      2,
      "^",
      3,
      "/",
      3,
    ]);
  });
});

describe("Parser invalid cases", () => {
  it("1 + + 33 - 2", () => {
    expect(() => parser("1 + + 33 - 2")).toThrow(
      TypeError("Unexpected string")
    );
  });

  it("1 ! 33 - 2", () => {
    expect(() => parser("1 ! 33 - 2")).toThrow(TypeError("Unexpected string"));
  });

  it("1 % * 33 - 2", () => {
    expect(() => parser("1 %  * 33 - 2")).toThrow(
      TypeError("Unexpected string")
    );
  });

  it("5 ! ! 20", () => {
    expect(() => parser("5 ! ! 20")).toThrow(TypeError("Unexpected string"));
  });
});
