import React from "react";
import type { ListItemProps, ToggleCompleteProps } from "types/todo";
import { List } from "./components/List";
import { AddForm } from "./components/AddForm";
import styled from "@emotion/styled";

interface ToDoListProps {
  list: ListItemProps[];
}

interface ToDoListState {
  list: ListItemProps[];
}

const ToDoListWrapper = styled.div`
  display: block;
  width: 500px;
  margin: 10px auto;
  padding: 20px 50px;
  background: #eaeaea;
`;

const TitleWrapper = styled.div`
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export class ToDoList extends React.Component<ToDoListProps, ToDoListState> {
  constructor(props: ToDoListProps) {
    super(props);
    this.state = {
      list: props.list,
    };
    this.toggleCompleteHandler = this.toggleCompleteHandler.bind(this);
  }

  public toggleCompleteHandler(id: number): void {
    const updateList = this.state.list.map((row) => {
      if (row.id === id) {
        return { ...row, isComplete: !row.isComplete };
      }
      return row;
    });

    this.setState({
      list: updateList,
    });
  }

  render() {
    return (
      <ToDoListWrapper>
        <TitleWrapper>Список дел</TitleWrapper>
        <List
          list={this.state.list}
          toggleComplete={this.toggleCompleteHandler}
        />
        <AddForm />
      </ToDoListWrapper>
    );
  }
}
