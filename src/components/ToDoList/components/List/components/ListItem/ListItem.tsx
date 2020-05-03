import React from "react";

import type { ListItemProps, ToggleCompleteProps } from "types/todo";

interface Props {
  listItem: ListItemProps;
  toggleComplete: ToggleCompleteProps;
  deleteListItem: ToggleCompleteProps;
  editListItem: ToggleCompleteProps;
}

export const ListItem: React.FC<Props> = ({
  listItem,
  toggleComplete,
  deleteListItem,
  editListItem,
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
      <button
        type="button"
        name="editListItem"
        onClick={() => editListItem(listItem.id)}
      >
        Редактировать
      </button>
      <button
        type="button"
        name="deleteListItem"
        onClick={() => deleteListItem(listItem.id)}
      >
        Удалить
      </button>
    </div>
  );
};
