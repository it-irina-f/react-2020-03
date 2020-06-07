// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  const result = teams.reduce((prev, current) => {
    return current.score > prev.score ? current : prev;
  });

  return result.name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  const result = Object.entries(qsObj)
    .map((item) => item.join("="))
    .join("&");

  return "?" + result;
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  const arr = qs.slice(1).split("&");
  return arr.reduce((prev, current) => {
    const [key, value] = current.split("=");
    prev[key] = value;
    return prev;
  }, {});
};
