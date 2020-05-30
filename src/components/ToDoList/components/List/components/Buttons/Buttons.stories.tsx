import React from "react";
import { action } from "@storybook/addon-actions";
import { ManageButton } from "./Buttons";
import { IconEdit, IconSave, IconTrash2, IconX } from "sancho";

export default {
  title: "ManageButton Component",
};

const isSubmit = true;

export const ManageButtons = () => [
  <ManageButton
    key="btn1"
    icon={<IconEdit />}
    onClick={action("Click for button: edit item")}
    label="editListItem"
    id="editListItem_0"
  />,
  <ManageButton
    key="btn2"
    icon={<IconTrash2 />}
    onClick={action("Click for button: delete item")}
    label="deleteListItem"
    id="deleteListItem_0"
  />,
  <ManageButton
    key="btn3"
    icon={<IconSave />}
    name="saveEditing"
    label="saveEditing"
    isSubmit={true}
  />,
  <ManageButton
    key="btn4"
    icon={<IconX />}
    onClick={action("Click for button: cancel editing")}
    label="cancelEditing"
    id="cancelEditing_0"
  />,
];
