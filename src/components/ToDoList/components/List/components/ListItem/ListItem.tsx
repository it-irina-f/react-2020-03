import React from "react";
import { IconEdit, IconTrash2, IconButton } from "sancho";
import styled from "@emotion/styled";
import type { ListItemProps, TypeIdNumber } from "types/todo";

interface Props {
  listItem: ListItemProps;
  toggleComplete: TypeIdNumber;
  deleteListItem: TypeIdNumber;
  handleEdit: TypeIdNumber;
}

const ListItemWrapper = styled.div`
  display: flex;
  margin: 10px auto;
  border-bottom: 1px solid #ddd;
  padding: 0 0 10px;
`;

const LabelWrapper = styled.label`
  flex-grow: 1;
`;

export const ListItem: React.FC<Props> = ({
  listItem,
  toggleComplete,
  deleteListItem,
  handleEdit,
}) => {
  return (
    <ListItemWrapper>
      <LabelWrapper>
        <input
          type="checkbox"
          name={"checkbox_" + listItem.id}
          checked={listItem.isComplete}
          onChange={() => toggleComplete(listItem.id)}
        />
        {listItem.text}
      </LabelWrapper>
      <IconButton
        icon={<IconEdit />}
        type="button"
        onClick={() => handleEdit(listItem.id)}
        label="editListItem"
        id={"editListItem_" + listItem.id}
        size="sm"
      />
      <IconButton
        icon={<IconTrash2 />}
        type="button"
        onClick={() => deleteListItem(listItem.id)}
        label="deleteListItem"
        id={"deleteListItem_" + listItem.id}
        size="sm"
      />
    </ListItemWrapper>
  );
};
