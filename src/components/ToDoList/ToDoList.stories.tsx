import React from "react";
import {withKnobs, object} from "@storybook/addon-knobs";

import { ToDoList } from "./ToDoList";

export default {
  title: "ToDoList Component",
  decorators: [withKnobs],
};

const list = [
  { id: 0, text: "Полить цветы", isComplete: true },
  { id: 1, text: "Сделать ДЗ", isComplete: false },
  { id: 2, text: "Купить продукты", isComplete: true },
  { id: 3, text: "Приготовить ужин", isComplete: false },
  { id: 4, text: "Уборка квартиры", isComplete: false },
];

export const componentToDoList = () => <ToDoList list={object("list", list)} />;
