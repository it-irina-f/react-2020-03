import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

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
  <List
    key="jsx"
    editId={-1}
    list={object("list", list)}
    toggleComplete={action("Item clicked")}
    deleteListItem={action("Click for delete item")}
    editListItem={action("Click for edit item")}
    cancelEditing={action("Click for cancel editing")}
    saveListItem={action("Click for save editing")}
  />,
];

export const componentListEdit = () => [
  <List
    key="jsx"
    editId={1}
    list={object("list", list)}
    toggleComplete={action("Item clicked")}
    deleteListItem={action("Click for delete item")}
    editListItem={action("Click for edit item")}
    cancelEditing={action("Click for cancel editing")}
    saveListItem={action("Click for save editing")}
  />,
];
