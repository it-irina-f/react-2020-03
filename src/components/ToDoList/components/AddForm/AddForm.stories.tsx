import React from "react";
import { action } from "@storybook/addon-actions";

import { AddForm } from "./AddForm";

export default {
  title: "AddForm Component",
};

export const AddFormComponent = () => [
  <AddForm key="jsx" addListItem={action("add new item in list")} />,
];
