import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object, array } from "@storybook/addon-knobs";

import { List } from "./List";

export default {
  title: "List Component",
  decorators: [withKnobs],
};

const list = [
  { id: 0, text: "Полить цветы", isComplete: true },
  { id: 1, text: "Сделать ДЗ", isComplete: false },
  { id: 2, text: "Купить продукты", isComplete: true },
  { id: 3, text: "Приготовить ужин", isComplete: false },
  { id: 4, text: "Уборка квартиры", isComplete: false },
];

export const componentList = () => [
  <List key="jsx" list={list} toggleComplete={action("Item clicked ")} />,
];
