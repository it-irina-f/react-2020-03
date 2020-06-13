import { runner } from "./runner";

describe("Runner simple cases", () => {
  it("1 * 32", () => {
    expect(runner("1 * 32")).toEqual(32);
  });

  it("2 * 32", () => {
    expect(runner("2 * 32")).toEqual(64);
  });

  it("2 + 32", () => {
    expect(runner("2 + 32")).toEqual(34);
  });

  it("2 ^ 3", () => {
    expect(runner("2 ^ 3")).toEqual(8);
  });

  it("3 !", () => {
    expect(runner("3 !")).toEqual(6);
  });

  it("3 **", () => {
    expect(runner("3 **")).toEqual(9);
  });
});

describe("Runner tripled/mixed cases", () => {
  it("2 * 2 * 3", () => {
    expect(runner("2 * 2 * 3")).toEqual(12);
  });

  it("2 * 2 + 3", () => {
    expect(runner("2 * 2 + 3")).toEqual(7);
  });

  it("2 + 2 * 3", () => {
    expect(runner("2 + 2 * 3")).toEqual(8);
  });

  it("2 + 2 ^ 3", () => {
    expect(runner("2 + 2 ^ 3")).toEqual(10);
  });

  it("2 * 2 ^ 3", () => {
    expect(runner("2 * 2 ^ 3")).toEqual(64);
  });

  it("4 + 3 **", () => {
    expect(runner("4 + 3 **")).toEqual(13);
  });

  it("2 * 3 **", () => {
    expect(runner("2 * 3 **")).toEqual(18);
  });

  it("12 / 3 !", () => {
    expect(runner("12 / 3 !")).toEqual(2);
  });

  it("9 - 3 !", () => {
    expect(runner("9 - 3 !")).toEqual(3);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });

  it("20 + 1 * 10 - 5 * 3 + 2 ^ 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3 + 2 ^ 3")).toEqual(23);
  });

  it("20 + 3 ! - 5 * 3", () => {
    expect(runner("20 + 3 ! - 5 * 3")).toEqual(11);
  });

  it("4 ** - 3 ! + 3 ^ 3 + 20 / 2", () => {
    expect(runner("4 ** - 3 ! + 3 ^ 3 + 20 / 2")).toEqual(47);
  });
});
