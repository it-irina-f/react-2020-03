import React from "react";
import { Button, Input } from "sancho";
import styled from "@emotion/styled";

type TypeAddForm = (text: string) => void;

interface AddFormProps {
  addListItem: TypeAddForm;
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
