import React from "react";
import type { ListItemProps } from "types/todo";
import { List } from "./components/List";
import styled from "@emotion/styled";

/*interface ToDoListProps {
  list: Array<ListItemProps>;
}*/
export const initialList: Array<ListItemProps> = [
  { text: "Полить цветы", isComplete: true },
  { text: "Сделать ДЗ", isComplete: false },
  { text: "Купить продукты", isComplete: true },
  { text: "Приготовить ужин", isComplete: false },
  { text: "Уборка квартиры", isComplete: true },
  { text: "Погулять с собакой", isComplete: false },
];

interface ToDoListState {
  list: Array<ListItemProps>;
}

const ToDoListWrapper = styled.div`
  display: block;
  width: 500px;
  margin: 10px auto;
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
  }

  render() {
    return (
      <ToDoListWrapper>
        <TitleWrapper>Список дел</TitleWrapper>
        <List list={this.state.list} />
      </ToDoListWrapper>
    );
  }
}
