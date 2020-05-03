import React, { FC } from "react";
import styled from "@emotion/styled";
import type {
  ListItemProps,
  ToggleCompleteProps,
  saveListItemProps,
  cancelEditingProps,
} from "types/todo";

import { ListItem, ListItemEdit } from "./components";

const ListWrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #6883bf;
  border-radius: 5px;
`;

interface Props {
  list: ListItemProps[];
  toggleComplete: ToggleCompleteProps;
  deleteListItem: ToggleCompleteProps;
  editListItem: ToggleCompleteProps;
  cancelEditing: cancelEditingProps;
  saveListItem: saveListItemProps;
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

    function isNoChange(propsRow: ListItemProps) {
      return (
        stateList.filter((stateRow) => {
          return (
            stateRow.id === propsRow.id &&
            stateRow.isComplete === propsRow.isComplete &&
            stateRow.text === propsRow.text
          );
        }).length > 0
      );
    }

    if (
      propsList.every(isNoChange) === false ||
      propsList.length !== stateList.length
    ) {
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
    return (
      <ListWrapper>
        {this.state.list.map((row) =>
          row.id === editId ? (
            <ListItemEdit
              key={row.id}
              listItem={row}
              cancelEditing={this.props.cancelEditing}
              saveListItem={this.props.saveListItem}
            />
          ) : (
            <ListItem
              key={row.id}
              listItem={row}
              toggleComplete={this.props.toggleComplete}
              deleteListItem={this.props.deleteListItem}
              editListItem={this.props.editListItem}
            />
          )
        )}
      </ListWrapper>
    );
  }
}
