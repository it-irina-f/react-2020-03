import React, { FC } from "react";
import styled from "@emotion/styled";
import type { ListItemProps, ToggleCompleteProps } from "types/todo";

import { ListItem } from "./components";

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
            stateRow.isComplete === propsRow.isComplete
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
    return (
      <ListWrapper>
        {this.state.list.map((row) => (
          <ListItem
            key={row.id}
            listItem={row}
            toggleComplete={this.props.toggleComplete}
            deleteListItem={this.props.deleteListItem}
          />
        ))}
      </ListWrapper>
    );
  }
}
