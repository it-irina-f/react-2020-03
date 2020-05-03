import React from "react";
import type { ListItemProps } from "types/todo";
import { List } from "./components/List";
import { AddForm } from "./components/AddForm";
import styled from "@emotion/styled";
import { reactLocalStorage } from "reactjs-localstorage";

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
  constructor(props: ToDoListProps) {
    super(props);
    this.state = {
      list: [],
      isLoading: true,
    };
    this.toggleCompleteHandler = this.toggleCompleteHandler.bind(this);
    this.addListItemHandler = this.addListItemHandler.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
  }

  componentDidMount(): void {
    this.timerHandle();
  }

  componentWillUnmount(): void {
    clearTimeout(this.timerHandle());
  }

  timerHandle = () => setTimeout(() => this.getList(), 3000);

  getList(): void {
    const todosFromLocalStorage = reactLocalStorage.getObject(
      "localStorageTodos"
    );

    this.setState({
      isLoading: false,
      list: todosFromLocalStorage || [],
    });
  }

  updateList(updateList): void {
    this.setState(
      {
        list: updateList,
      },
      () => {
        reactLocalStorage.setObject("localStorageTodos", this.state.list);
      }
    );
  }

  public toggleCompleteHandler(id: number): void {
    const updList = this.state.list.map((row) => {
      if (row.id === id) {
        return { ...row, isComplete: !row.isComplete };
      }
      return row;
    });

    this.updateList(updList);
  }

  public addListItemHandler(text: string): void {
    const newList = [
      ...this.state.list,
      { id: this.state.list.length, text: text, isComplete: false },
    ];

    this.updateList(newList);
  }

  public deleteItemHandler(id: number): void {
    const updList = this.state.list.filter((row) => {
      return row.id !== id;
    });

    this.updateList(updList);
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
            deleteListItem={this.deleteItemHandler}
          />
        )}
        <AddForm addListItem={this.addListItemHandler} />
      </ToDoListWrapper>
    );
  }
}
