import React from "react";
import { List } from "@/modules/ToDoList/List";
import { AddForm } from "@/modules/ToDoList/AddForm";
import { Filter } from "@/modules/ToDoList/Filter";
import { Search } from "@/modules/ToDoList/Search";
import styled from "@emotion/styled";
import { reactLocalStorage } from "reactjs-localstorage";

interface ListItemProps {
  id: number;
  text: string;
  isComplete: boolean;
}

interface ToDoListProps {
  list?: ListItemProps[];
}

interface ToDoListState {
  list: ListItemProps[];
  isLoading: boolean;
  editId: number;
  filter: string;
  queryResult: ListItemProps[];
}

const ToDoListWrapper = styled.div`
  display: block;
  width: 800px;
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

const ManageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export class ToDoList extends React.Component<ToDoListProps, ToDoListState> {
  constructor(props: ToDoListProps) {
    super(props);
    this.state = {
      list: [],
      isLoading: true,
      editId: -1,
      filter: "all",
      queryResult: [],
    };
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

  toggleCompleteHandler = (id: number) => {
    const updList = this.state.list.map((row) => {
      if (row.id === id) {
        return { ...row, isComplete: !row.isComplete };
      }
      return row;
    });

    this.updateList(updList);
  };

  addListItemHandler = (text: string) => {
    const newList = [
      ...this.state.list,
      {
        id: Date.now(),
        text: text,
        isComplete: false,
      },
    ];

    this.updateList(newList);
  };

  deleteItemHandler = (id: number) => {
    const updList = this.state.list.filter((row) => {
      return row.id !== id;
    });

    this.updateList(updList);
  };

  editHandler = (id: number) => {
    this.setState({
      editId: id,
    });
  };

  saveItemHandler = (id: number, text: string) => {
    const updList = this.state.list.map((row) => {
      if (row.id === id) {
        return { ...row, text };
      }
      return row;
    });

    this.updateList(updList);

    this.editHandler(-1);
  };

  changeFilterHandler = (mode: string) => {
    this.setState({
      filter: mode,
    });
  };

  searchItemHandler = (text: string) => {
    const queryResult = this.state.list.filter((row) => {
      return row.text.toLowerCase().indexOf(text.toLowerCase()) != -1;
    });

    this.setState({
      queryResult: queryResult,
    });
  };

  render() {
    return (
      <ToDoListWrapper>
        <TitleWrapper>Список дел</TitleWrapper>
        <ManageWrapper>
          <Search searchItem={this.searchItemHandler} />
          <Filter changeFilter={this.changeFilterHandler} />
        </ManageWrapper>
        {this.state.isLoading ? (
          <h1>Загрузка данных...</h1>
        ) : (
          <List
            list={
              this.state.queryResult.length === 0
                ? this.state.list
                : this.state.queryResult
            }
            editId={this.state.editId}
            toggleComplete={this.toggleCompleteHandler}
            deleteListItem={this.deleteItemHandler}
            handleEdit={this.editHandler}
            saveListItem={this.saveItemHandler}
            filter={this.state.filter}
          />
        )}
        <AddForm addListItem={this.addListItemHandler} />
      </ToDoListWrapper>
    );
  }
}
