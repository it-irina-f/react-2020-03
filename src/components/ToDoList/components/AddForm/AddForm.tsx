import React from "react";
import { Button, Input } from "sancho";
import type { TypeAddForm } from "types/todo";
import styled from "@emotion/styled";

interface AddFormProps {
  addListItem: TypeAddForm;
  activeLength: number;
}

interface AddFormState {
  textInput: string;
}

const FormWrapper = styled.form`
  display: flex;
`;

export class AddForm extends React.Component<AddFormProps, AddFormState> {
  state = {
    textInput: "",
  };

  submitHandler = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.addListItem(this.state.textInput);
    this.setState({
      textInput: "",
    });
  };

  inputChangeHandle = (ev: React.ChangeEvent) => {
    this.setState({
      textInput: (ev.target as HTMLInputElement).value,
    });
  };

  render() {
    if (this.props.activeLength === 5) {
      throw new Error("crashed");
    }
    return (
      <FormWrapper onSubmit={this.submitHandler}>
        <Input
          inputSize="md"
          placeholder="Добавить новую задачу"
          type="text"
          name="addlistItem"
          value={this.state.textInput}
          onChange={this.inputChangeHandle}
        />
        <Button intent="primary" type="submit">
          Добавить
        </Button>
      </FormWrapper>
    );
  }
}
