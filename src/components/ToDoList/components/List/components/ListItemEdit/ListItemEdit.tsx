import React from "react";
import { IconSave, IconX, IconButton, Input } from "sancho";
import styled from "@emotion/styled";
import type {
  ListItemProps,
  TypeIdNumber,
  TypeSaveListItem,
  TypeCancelEditing,
} from "types/todo";

interface Props {
  listItem: ListItemProps;
  saveListItem: TypeSaveListItem;
  cancelEditing: TypeCancelEditing;
}

interface State {
  textInput: string;
}

const FormWrapper = styled.form`
  display: flex;
  margin: 10px auto;
  border-bottom: 1px solid #ddd;
  padding: 0 0 10px;
`;

export class ListItemEdit extends React.Component<Props, State> {
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
        <IconButton
          icon={<IconSave />}
          type="submit"
          name="saveEditing"
          label="saveEditing"
          size="sm"
        />
        <IconButton
          icon={<IconX />}
          type="button"
          onClick={() => this.props.cancelEditing()}
          label="cancelEditing"
          name="cancelEditing"
          size="sm"
        />
      </FormWrapper>
    );
  }
}
