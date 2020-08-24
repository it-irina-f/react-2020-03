import React from "react";
import { IconEdit, IconTrash2, IconButton } from "sancho";
import styled from "@emotion/styled";
import type { ListItemProps, TypeIdNumber } from "types/todo";

interface Props {
  listItem: ListItemProps;
  toggleComplete: TypeIdNumber;
  deleteListItem: TypeIdNumber;
  editListItem: TypeIdNumber;
}

const ListItemWrapper = styled.div`
  display: flex;
  margin: 10px auto;
  border-bottom: 1px solid #ddd;
  padding: 0 0 10px;
`;

const LabelWrapper = styled.label`
  flex-grow: 1;
`;

export class ListItem extends React.Component<Props, {}> {
  shouldComponentUpdate(nextProps, nextState): boolean {
    return this.props.listItem.isComplete !== nextProps.listItem.isComplete;
  }

  render() {
    return (
      <ListItemWrapper>
        <LabelWrapper>
          <input
            type="checkbox"
            name={"checkbox_" + this.props.listItem.id}
            checked={this.props.listItem.isComplete}
            onChange={() => this.props.toggleComplete(this.props.listItem.id)}
          />
          {this.props.listItem.text}
        </LabelWrapper>
        <IconButton
          icon={<IconEdit />}
          type="button"
          onClick={() => this.props.editListItem(this.props.listItem.id)}
          label="editListItem"
          size="sm"
        />
        <IconButton
          icon={<IconTrash2 />}
          type="button"
          onClick={() => this.props.deleteListItem(this.props.listItem.id)}
          label="deleteListItem"
          size="sm"
        />
      </ListItemWrapper>
    );
  }
}
