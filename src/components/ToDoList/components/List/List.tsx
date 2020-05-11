import React, { FC } from "react";
import styled from "@emotion/styled";
import type {
  ListItemProps,
  TypeIdNumber,
  TypeSaveListItem,
  TypeCancelEditing,
} from "types/todo";

import { ListItem, ListItemEdit } from "./components";

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
}

interface State {
  list: ListItemProps[];
}

export class List extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      list: this.props.list,
    };
  }

  componentDidMount(): void {
    const newList = this.sortList(this.state.list);
    this.setState({
      list: newList,
    });
  }

  componentDidUpdate(): void {
    const propsList = this.props.list;
    const stateList = this.state.list;

    function isAnyChange() {
      if (propsList.length !== stateList.length) {
        return true;
      } else {
        const isNoChange = propsList.every((propsRow) => {
          return stateList.find((stateRow) => {
            return (
              stateRow.id === propsRow.id &&
              stateRow.isComplete === propsRow.isComplete &&
              stateRow.text === propsRow.text
            );
          });
        });
        return !isNoChange;
      }
    }

    if (isAnyChange()) {
      const newList = this.sortList(this.props.list);

      this.setState({
        list: newList,
      });
    }
  }

  sortList(initList: ListItemProps[]) {
    const listComplete = initList.filter((row) => {
      return row.isComplete === true;
    });

    const listNoComplete = initList.filter((row) => {
      return row.isComplete === false;
    });

    return listNoComplete.concat(listComplete);
  }

  render() {
    const editId = this.props.editId;
    const itemList = this.state.list.map((row) =>
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
        {this.state.list.length === 0 ? "Список пустой" : itemList}
      </ListWrapper>
    );
  }
}
