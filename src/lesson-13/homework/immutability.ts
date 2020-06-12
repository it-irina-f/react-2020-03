// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const { size, ...props } = originalTeam;
  return { ...props, name: "New York Badgers", roster: 25 };
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (
  originalArray: ReadonlyArray<number>
): SomeArray => {
  const [...newArray] = originalArray;

  return ["two", ...newArray.splice(2), 5];
};

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeam3 = (originalTeam: Team): Team => {
  return { ...originalTeam, captain: { ...originalTeam.captain, age: 28 } };
};
