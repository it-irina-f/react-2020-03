import React from "react";

import type { ListItemProps, ToggleCompleteProps } from "types/todo";

interface Props {
  listItem: ListItemProps;
  toggleComplete: ToggleCompleteProps;
}

export const ListItem: React.FC<Props> = ({ listItem, toggleComplete }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={"checkbox_" + listItem.id}
          checked={listItem.isComplete}
          onChange={() => toggleComplete(listItem.id)}
        />
        {listItem.text}
      </label>
    </div>
  );
};
