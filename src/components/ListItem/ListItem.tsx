import React from "react";
import { IconEdit, IconTrash2 } from "sancho";
import styled from "@emotion/styled";
import { ManageButton } from "@/components/Buttons";

interface ListItemProps {
  id: number;
  text: string;
  isComplete: boolean;
}

type TypeIdNumber = (id: number) => void;

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
      <ManageButton
        icon={<IconEdit />}
        onClick={() => handleEdit(listItem.id)}
        label="editListItem"
        id={"editListItem_" + listItem.id}
      />
      <ManageButton
        icon={<IconTrash2 />}
        onClick={() => deleteListItem(listItem.id)}
        label="deleteListItem"
        id={"deleteListItem_" + listItem.id}
      />
    </ListItemWrapper>
  );
};
