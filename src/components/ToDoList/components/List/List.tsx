import React, { FC } from "react";
import styled from "@emotion/styled";
import type { ListItemProps, ToggleCompleteProps } from "types/todo";

import { ListItem } from "./components";

const ListWrapper = styled.div`
  padding: 20px;
  border: 1px solid #6883bf;
  border-radius: 5px;
`;

interface Props {
  list: ListItemProps[];
  toggleComplete: ToggleCompleteProps;
}

export const List: FC<Props> = ({ list, toggleComplete }) => (
  <ListWrapper>
    {list.map((row) => (
      <ListItem key={row.id} listItem={row} toggleComplete={toggleComplete} />
    ))}
  </ListWrapper>
);
