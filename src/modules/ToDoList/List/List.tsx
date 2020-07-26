import React, { FC } from "react";
import styled from "@emotion/styled";
import type { ListItemProps, TypeIdNumber, TypeSaveListItem } from "types/todo";
import { ListItem } from "@/components/ListItem";
import { ListItemEdit } from "./ListItemEdit";

const ListWrapper = styled.div`
  padding: 20px;
  margin-bottom: 35px;
  border-radius: 12px;
  box-shadow: rgba(52, 58, 64, 0.15) 0px 1px 10px 0px,
    rgba(52, 58, 64, 0.1) 0px 6px 12px 0px,
    rgba(52, 58, 64, 0.12) 0px 6px 15px -2px;
`;

interface Props {
  list: ListItemProps[];
  toggleComplete: TypeIdNumber;
  deleteListItem: TypeIdNumber;
  handleEdit: TypeIdNumber;
  saveListItem: TypeSaveListItem;
  editId: number;
  filter: string;
}

interface State {
  list: ListItemProps[];
  filter: string;
}

export class List extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      list: this.props.list,
      filter: this.props.filter,
    };
  }

  sortList(initList: ListItemProps[], filter: string) {
    const listComplete = initList.filter((row) => {
      return row.isComplete === true;
    });

    const listNoComplete = initList.filter((row) => {
      return row.isComplete === false;
    });

    switch (filter) {
      case "active":
        return listNoComplete;
        break;
      case "done":
        return listComplete;
        break;
      default:
        return listNoComplete.concat(listComplete);
    }
  }

  render() {
    const sortList = this.sortList(this.props.list, this.props.filter);
    const editId = this.props.editId;
    const itemList = sortList.map((row) =>
      row.id === editId ? (
        <ListItemEdit
          key={row.id}
          listItem={row}
          saveListItem={this.props.saveListItem}
          handleEdit={this.props.handleEdit}
        />
      ) : (
        <ListItem
          key={row.id}
          listItem={row}
          toggleComplete={this.props.toggleComplete}
          deleteListItem={this.props.deleteListItem}
          handleEdit={this.props.handleEdit}
        />
      )
    );
    return (
      <ListWrapper>
        {sortList.length === 0 ? "Список пустой" : itemList}
      </ListWrapper>
    );
  }
}
