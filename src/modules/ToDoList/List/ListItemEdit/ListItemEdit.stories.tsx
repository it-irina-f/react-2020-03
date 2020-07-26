import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { ListItemEdit } from "./ListItemEdit";

export default {
  title: "ListItemEdit Component",
  decorators: [withKnobs],
};

const listItem1 = { id: 0, text: "Полить цветы", isComplete: true };

export const ListItemEditForm = () => [
  <ListItemEdit
    listItem={object("listItem", { ...listItem1 })}
    handleEdit={action("Click for cancel editing")}
    saveListItem={action("Click for save editing")}
    key="jsx"
  ></ListItemEdit>,
];
