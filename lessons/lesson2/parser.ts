import { isNumber } from "./helpers";
import { mathOperators, mathUnoOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush =
      !isNumber(prevItem) &&
      !mathUnoOperators.hasOwnProperty(prevItem) &&
      isNumber(item);

    const isValidUnoOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathUnoOperators.hasOwnProperty(item);

    const isValidOperatorPush =
      (isNumber(prevItem) ||
        (!isNumber(prevItem) && mathUnoOperators.hasOwnProperty(prevItem))) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidUnoOperatorPush) {
      result.push(item);
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
