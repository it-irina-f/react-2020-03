import React from "react";
import type { ManageBtnProps } from "types/ui";
import { IconButton } from "sancho";


export const ManageButton: React.FC<ManageBtnProps> = ({isSubmit=false, ...props}) => {
  return (
    <IconButton type={isSubmit ? "submit" : "button"} size="sm" {...props} />
  );
};
