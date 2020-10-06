import React, { useCallback, useState } from "react";
import { IconSave, IconX, Input } from "sancho";
import { ManageButton } from "components/Buttons";
import styled from "@emotion/styled";
import { isEmpty } from "ramda";

import { ToDoState } from "@/AppStore";
import { todoSlice } from "@/modules/ToDoList/reducer";
import { connect } from "react-redux";

const FormWrapper = styled.form`
  display: flex;
  margin: 10px auto;
  border-bottom: 1px solid #ddd;
  padding: 0 0 10px;
`;

const mapStateToProps = ({ todo }: ToDoState) => ({
  ...todo,
});

const mapDispatchToProps = {
  saveItemHandler: todoSlice.actions.saveItem,
  editItemHandler: todoSlice.actions.editItem,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const ListItemEditComponent: React.FC<Props> = ({
  editId,
  textInput,
  saveItemHandler,
  editItemHandler,
}) => {
  const [text, setName] = useState(textInput);

  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (!isEmpty(text)) {
        saveItemHandler(text);
      }
    },
    [text, saveItemHandler]
  );
  return (
    <FormWrapper onSubmit={onSubmit}>
      <Input
        inputSize="sm"
        placeholder="Переименовать задачу"
        type="text"
        name={"text_" + editId}
        value={text}
        onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
      />
      <ManageButton
        icon={<IconSave />}
        name="saveEditing"
        label="saveEditing"
        isSubmit={true}
      />
      <ManageButton
        icon={<IconX />}
        onClick={() => editItemHandler(-1)}
        label="cancelEditing"
        id={"cancelEditing_" + editId}
      />
    </FormWrapper>
  );
};
export const ListItemEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItemEditComponent);
