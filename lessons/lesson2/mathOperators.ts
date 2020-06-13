export type ScalarOperationType = (first: number, second: number) => number;
export type UnoOperationType = (first: number) => number;

const getFactorial = (accumulator: number, val: number): number =>
  val == 1 ? accumulator : getFactorial(accumulator * val, val - 1);

const factorialRec = (num: number): number => getFactorial(1, num);

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const squaring: UnoOperationType = (first: number): number =>
  (first **= 2);

export const exponentiation: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const factorial: UnoOperationType = (first: number): number =>
  factorialRec(first);

export const mathOperators: {
  [key: string]: ScalarOperationType;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": exponentiation,
};

export const mathUnoOperators: {
  [key: string]: UnoOperationType;
} = {
  "**": squaring,
  "!": factorial,
};

export const mathPriorities: number[] = [0, 1, 2];

const [UNARY, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "^": FIRST,
  "**": UNARY,
  "!": UNARY,
  "+": SECOND,
  "-": SECOND,
};
