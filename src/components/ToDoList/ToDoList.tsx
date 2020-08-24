import React from "react";
import type { ListItemProps } from "types/todo";
import { List } from "./components/List";
import { AddForm, ErrorBoundary } from "./components/AddForm";
import styled from "@emotion/styled";
import { reactLocalStorage } from "reactjs-localstorage";

interface ToDoListProps {
  list?: ListItemProps[];
}

interface ToDoListState {
  list: ListItemProps[];
  isLoading: boolean;
  editId: number;
}

const ToDoListWrapper = styled.div`
  display: block;
  width: 500px;
  margin: 10px auto;
  padding: 20px 50px;
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
      editId: -1,
    };
    this.toggleCompleteHandler = this.toggleCompleteHandler.bind(this);
    this.addListItemHandler = this.addListItemHandler.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
    this.editItemHandler = this.editItemHandler.bind(this);
    this.cancelEditingHandler = this.cancelEditingHandler.bind(this);
    this.saveItemHandler = this.saveItemHandler.bind(this);
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
      list: Array.isArray(todosFromLocalStorage) ? todosFromLocalStorage : [],
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
      {
        id: Date.now(),
        text: text,
        isComplete: false,
      },
    ];

    this.updateList(newList);
  }

  public deleteItemHandler(id: number): void {
    const updList = this.state.list.filter((row) => {
      return row.id !== id;
    });

    this.updateList(updList);
  }

  public editItemHandler(id: number): void {
    this.setState({
      editId: id,
    });
  }

  public cancelEditingHandler(): void {
    this.setState({
      editId: -1,
    });
  }

  public saveItemHandler(id: number, text: string): void {
    this.setState({
      editId: -1,
    });

    const updList = this.state.list.map((row) => {
      if (row.id === id) {
        return { ...row, text };
      }
      return row;
    });

    this.updateList(updList);
  }

  render() {
    const activeLength = this.state.list.filter((item) => {
      return item.isComplete === false;
    }).length;

    return (
      <ToDoListWrapper>
        <TitleWrapper>Список дел</TitleWrapper>
        {this.state.isLoading ? (
          <h1>Загрузка данных...</h1>
        ) : (
          <List
            list={this.state.list}
            editId={this.state.editId}
            toggleComplete={this.toggleCompleteHandler}
            deleteListItem={this.deleteItemHandler}
            editListItem={this.editItemHandler}
            cancelEditing={this.cancelEditingHandler}
            saveListItem={this.saveItemHandler}
          />
        )}
        <ErrorBoundary>
          <AddForm
            addListItem={this.addListItemHandler}
            activeLength={activeLength}
          />
        </ErrorBoundary>
      </ToDoListWrapper>
    );
  }
}
