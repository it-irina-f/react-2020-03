import { unaryPrioritiesCalc, firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });

  it("[2, ^ 3]", () => {
    expect(firstPrioritiesCalc([2, "^", 3])).toEqual([8]);
  });

  it("[3, !]", () => {
    expect(unaryPrioritiesCalc([3, "!"])).toEqual([6]);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });

  it("[3, !, +, 6]", () => {
    expect(unaryPrioritiesCalc([3, "!", "+", 6])).toEqual([6, "+", 6]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
