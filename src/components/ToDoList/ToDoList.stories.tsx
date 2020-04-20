import React from "react";
import { withKnobs, number, array } from "@storybook/addon-knobs";

import { ToDoList } from "./ToDoList";

export default {
  title: "ToDoList Component",
  decorators: [withKnobs],
};

export const componentToDoList = () => <ToDoList />;
