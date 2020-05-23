import React from "react";
import { action } from "@storybook/addon-actions";

import { Filter } from "./Filter";

export default {
  title: "Filter Component",
};

export const FilterComponent = () => [
  <Filter key="jsx" filterList={action("filter list")} />,
];
