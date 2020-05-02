import React from "react";
import type { AddFormProps } from "types/todo";

interface Props {
  addListItem: AddFormProps;
}

interface State {
  textInput: string;
}

export class AddForm extends React.Component<Props, State> {
  state = {
    textInput: "",
  };

  submitHandler = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.addListItem(this.state.textInput);
  };

  inputChangeHandle = (ev: React.ChangeEvent) => {
    this.setState({
      textInput: (ev.target as HTMLInputElement).value,
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="addlistItem"
          placeholder="Добавить новую задачу"
          value={this.state.textInput}
          onChange={this.inputChangeHandle}
        />

        <button>Добавить</button>
      </form>
    );
  }
}
