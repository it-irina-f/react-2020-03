import React from "react";
import { action } from "@storybook/addon-actions";

import { Search } from "./Search";

export default {
  title: "Search Component",
};

export const AddFormComponent = () => [
  <Search key="jsx" searchItem={action("search items in list")} />,
];
