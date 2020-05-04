import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { ListItem } from "./ListItem";

export default {
  title: "ListItem Component",
  decorators: [withKnobs],
};

const listItem1 = { id: 0, text: "Полить цветы", isComplete: true };
const listItem2 = { id: 1, text: "Сделать ДЗ", isComplete: false };

export const noComplete = () => [
  <ListItem
    listItem={object("listItem", { ...listItem1 })}
    toggleComplete={action("Item clicked")}
    deleteListItem={action("Click for delete item")}
    editListItem={action("Click for edit item")}
    key="jsx"
  ></ListItem>,
];

export const complete = () => [
  <ListItem
    listItem={object("listItem", { ...listItem2 })}
    toggleComplete={action("Item clicked")}
    deleteListItem={action("Click for delete item")}
    editListItem={action("Click for edit item")}
    key="jsx"
  ></ListItem>,
];
