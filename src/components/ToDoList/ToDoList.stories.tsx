import React from "react";
import { withKnobs, number, array } from "@storybook/addon-knobs";

import { ToDoList } from "./ToDoList";

export default {
  title: "ToDoList Component",
  decorators: [withKnobs],
};

const list = [
  { text: "Полить цветы", isComplete: true },
  { text: "Сделать ДЗ", isComplete: false },
  { text: "Купить продукты", isComplete: true },
  { text: "Приготовить ужин", isComplete: false },
  { text: "Уборка квартиры", isComplete: false },
];

export const componentToDoList = () => <ToDoList />;
