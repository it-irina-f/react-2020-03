import React from "react";
import type { ListItemProps } from "types/todo";

export const ListItem: React.FC<ListItemProps> = ({ text, isComplete }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={isComplete} />
        {text}
      </label>
    </div>
  );
};
