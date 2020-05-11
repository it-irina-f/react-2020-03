import React from "react";
import { IconSave, IconX, Input } from "sancho";
import { ManageButton } from "../Buttons";
import styled from "@emotion/styled";
import type { ListItemProps, TypeIdNumber, TypeSaveListItem } from "types/todo";

interface ListItemEditProps {
  listItem: ListItemProps;
  saveListItem: TypeSaveListItem;
  handleEdit: TypeIdNumber;
}

interface ListItemEditState {
  textInput: string;
}

const FormWrapper = styled.form`
  display: flex;
  margin: 10px auto;
  border-bottom: 1px solid #ddd;
  padding: 0 0 10px;
`;

export class ListItemEdit extends React.Component<
  ListItemEditProps,
  ListItemEditState
> {
  state = {
    textInput: this.props.listItem.text,
  };

  inputChangeHandle = (ev: React.ChangeEvent) => {
    this.setState({
      textInput: (ev.target as HTMLInputElement).value,
    });
  };

  submitHandler = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.saveListItem(this.props.listItem.id, this.state.textInput);
  };

  render() {
    const isSubmit = true;
    return (
      <FormWrapper onSubmit={this.submitHandler}>
        <Input
          inputSize="sm"
          placeholder="Переименовать задачу"
          type="text"
          name={"text_" + this.props.listItem.id}
          value={this.state.textInput}
          onChange={this.inputChangeHandle}
        />
        <ManageButton
          icon={<IconSave />}
          name="saveEditing"
          label="saveEditing"
          isSubmit={isSubmit}
        />
        <ManageButton
          icon={<IconX />}
          onClick={() => this.props.handleEdit(-1)}
          label="cancelEditing"
          id={"cancelEditing_" + this.props.listItem.id}
        />
      </FormWrapper>
    );
  }
}
