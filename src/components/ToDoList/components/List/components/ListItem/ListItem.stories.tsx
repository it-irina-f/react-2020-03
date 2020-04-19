import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import { ListItem } from "./ListItem";

export default {
  title: "ListItem",
  decorators: [withKnobs],
};

export const noComplete = () => [
  <ListItem
    text={text("text", "Полить цветы")}
    isComplete={boolean("isComplete", false)}
    key="jsx"
  ></ListItem>,
];

export const complete = () => [
  <ListItem
    text={text("text", "Сделать ДЗ")}
    isComplete={boolean("isComplete", true)}
    key="jsx"
  ></ListItem>,
];
