import React from "react";
import type { ListItemProps } from "types/todo";
import { List } from "./components/List";
import { AddForm } from "./components/AddForm";
import styled from "@emotion/styled";

export const initialList: Array<ListItemProps> = [
  { id: 0, text: "Полить цветы", isComplete: true },
  { id: 1, text: "Сделать ДЗ", isComplete: false },
  { id: 2, text: "Купить продукты", isComplete: true },
  { id: 3, text: "Приготовить ужин", isComplete: false },
  { id: 4, text: "Уборка квартиры", isComplete: true },
  { id: 5, text: "Погулять с собакой", isComplete: false },
];

interface ToDoListState {
  list: Array<ListItemProps>;
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

export class ToDoList extends React.Component<{}, ToDoListState> {
  constructor() {
    super({});
    this.state = {
      list: initialList,
    };
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  public toggleComplete(id: number): void {
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
        <List list={this.state.list} toggleComplete={this.toggleComplete} />
        <AddForm />
      </ToDoListWrapper>
    );
  }
}
