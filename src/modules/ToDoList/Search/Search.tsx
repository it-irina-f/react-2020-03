import React from "react";
import { IconButton, Input, IconSearch } from "sancho";

import type { TypeAddForm } from "types/todo";
import styled from "@emotion/styled";

interface SearchProps {
  searchItem: TypeAddForm;
}

interface SearchState {
  textInput: string;
}

const FormWrapper = styled.form`
  display: flex;
`;

export class Search extends React.Component<SearchProps, SearchState> {
  state = {
    textInput: "",
  };

  submitHandler = (ev: React.FormEvent) => {
    ev.preventDefault();
    this.props.searchItem(this.state.textInput);
  };

  inputChangeHandle = (ev: React.ChangeEvent) => {
    const queryText = (ev.target as HTMLInputElement).value;
    this.setState({
      textInput: queryText,
    });

    if (!queryText) {
      this.props.searchItem(queryText);
    }
  };

  render() {
    return (
      <FormWrapper onSubmit={this.submitHandler}>
        <Input
          inputSize="md"
          placeholder="Введите текст для поиска..."
          type="search"
          name="searchItems"
          value={this.state.textInput}
          onChange={this.inputChangeHandle}
        />
        <IconButton
          variant="outline"
          intent="primary"
          type="submit"
          label="search"
          icon={<IconSearch />}
        />
      </FormWrapper>
    );
  }
}
