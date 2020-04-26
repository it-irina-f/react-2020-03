import React from "react";
import type { ListItemProps } from "types/todo";
import { List } from "./components/List";
import { AddForm } from "./components/AddForm";
import styled from "@emotion/styled";

interface ToDoListProps {
  list?: ListItemProps[];
}

interface ToDoListState {
  list: ListItemProps[];
  isLoading: boolean;
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
  private timerHandle: number | undefined;

  constructor(props: ToDoListProps) {
    super(props);
    this.state = {
      list: [],
      isLoading: true,
    };
    this.toggleCompleteHandler = this.toggleCompleteHandler.bind(this);
    this.addListItemHandler = this.addListItemHandler.bind(this);
  }

  componentDidMount(): void {
    this.timerHandle = window.setTimeout(() => this.getList(), 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerHandle);
  }

  getList(): void {
    const todosFromLocalStorage = JSON.parse(
      localStorage.getItem("localStorageTodos") as string
    );

    this.setState({
      isLoading: false,
      list: todosFromLocalStorage || [],
    });
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

  public addListItemHandler(text: string): void {
    this.setState(
      {
        list: [
          ...this.state.list,
          { id: this.state.list.length, text: text, isComplete: false },
        ],
      },
      () => {
        localStorage.setItem(
          "localStorageTodos",
          JSON.stringify(this.state.list)
        );
      }
    );
  }

  render() {
    return (
      <ToDoListWrapper>
        <TitleWrapper>Список дел</TitleWrapper>
        {this.state.isLoading ? (
          <h1>Загрузка данных...</h1>
        ) : (
          <List
            list={this.state.list}
            toggleComplete={this.toggleCompleteHandler}
          />
        )}
        <AddForm addListItem={this.addListItemHandler} />
      </ToDoListWrapper>
    );
  }
}
