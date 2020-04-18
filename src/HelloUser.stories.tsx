import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { HelloUser } from "./HelloUser";

export default {
  title: "HelloUser simple component",
  decorators: [withKnobs],
};

export const HelloUserStory: React.FC<{}> = () => {
  const name = text("User name", "Irina");

  return <HelloUser username={name}> </HelloUser>;
};
