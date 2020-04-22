import React from "react";
import { render } from "react-dom";
import type { ListItemProps } from "types/todo";

import { ToDoList } from "./components";

export const initialList: Array<ListItemProps> = [
  { id: 0, text: "Полить цветы", isComplete: true },
  { id: 1, text: "Сделать ДЗ", isComplete: false },
  { id: 2, text: "Купить продукты", isComplete: true },
  { id: 3, text: "Приготовить ужин", isComplete: false },
  { id: 4, text: "Уборка квартиры", isComplete: true },
  { id: 5, text: "Погулять с собакой", isComplete: false },
];

render(<ToDoList list={initialList} />, document.getElementById("root"));
