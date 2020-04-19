import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object, array } from "@storybook/addon-knobs";

import { List } from "./List";

export default {
  title: "List Component",
  decorators: [withKnobs],
};

const list = [
  { text: "Полить цветы", isComplete: true },
  { text: "Сделать ДЗ", isComplete: false },
  { text: "Купить продукты", isComplete: true },
  { text: "Приготовить ужин", isComplete: false },
  { text: "Уборка квартиры", isComplete: false },
];

export const componentList = () => [<List key="jsx" list={list} />];
