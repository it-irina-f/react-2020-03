import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import { ListItem } from "./ListItem";

export default {
  title: "ListItem Component",
  decorators: [withKnobs],
};

const listItem1 = { id: 0, text: "Полить цветы", isComplete: true };
const listItem2 = { id: 1, text: "Сделать ДЗ", isComplete: false };

export const noComplete = () => [
  <ListItem
    listItem={listItem1}
    toggleComplete={action("Item clicked")}
    key="jsx"
  ></ListItem>,
];

export const complete = () => [
  <ListItem
    listItem={listItem2}
    toggleComplete={action("Item clicked")}
    key="jsx"
  ></ListItem>,
];
