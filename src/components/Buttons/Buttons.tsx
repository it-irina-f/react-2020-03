import React from "react";
import { IconButton } from "sancho";

interface ManageBtnProps {
  isSubmit?: boolean;
  label: string;
  name?: string;
  id?: string;
  icon: any;
  onClick?: () => void;
}

export const ManageButton: React.FC<ManageBtnProps> = ({
  isSubmit = false,
  ...props
}) => {
  return (
    <IconButton type={isSubmit ? "submit" : "button"} size="sm" {...props} />
  );
};
