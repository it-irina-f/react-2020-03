import React, { useRef } from "react";
import type { AddFormProps } from "types/todo";

interface Props {
  addListItem: AddFormProps;
}

export const AddForm: React.FC<Props> = ({ addListItem }) => {
  const itemText = useRef(null);

  const submitHandler = (): void => {
    const listItem = itemText.current.value || "";
    if (listItem.length) {
      addListItem(listItem);
      itemText.current.value = "";
    }
  };

  return (
    <form>
      <input
        type="text"
        name="addlistItem"
        placeholder="Добавить новую задачу"
        ref={itemText}
      />

      <button type="button" onClick={submitHandler}>
        Добавить
      </button>
    </form>
  );
};
