import React from "react";

import type { ListItemProps, ToggleCompleteProps } from "types/todo";

interface Props {
  listItem: ListItemProps;
  toggleComplete: ToggleCompleteProps;
  deleteListItem: ToggleCompleteProps;
}

export const ListItem: React.FC<Props> = ({
  listItem,
  toggleComplete,
  deleteListItem,
}) => {
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
      <button type="button" onClick={() => deleteListItem(listItem.id)}>
        Удалить
      </button>
    </div>
  );
};
