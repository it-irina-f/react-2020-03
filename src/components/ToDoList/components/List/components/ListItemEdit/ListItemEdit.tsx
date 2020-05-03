import React from "react";

import type {
  ListItemProps,
  ToggleCompleteProps,
  saveListItemProps,
  cancelEditingProps,
} from "types/todo";

interface Props {
  listItem: ListItemProps;
  saveListItem: saveListItemProps;
  cancelEditing: cancelEditingProps;
}

interface State {
  textInput: string;
}

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
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name={"text_" + this.props.listItem.id}
          value={this.state.textInput}
          placeholder="Переименовать задачу"
          onChange={this.inputChangeHandle}
        />
        <button name="saveEditing">Сохранить</button>
        <button
          type="button"
          name="cancelEditing"
          onClick={() => this.props.cancelEditing()}
        >
          Отмена
        </button>
      </form>
    );
  }
}
