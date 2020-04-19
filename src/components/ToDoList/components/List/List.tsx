import React, { FC } from "react";
import styled from "@emotion/styled";
import type { ListProps } from "types/todo";

import { ListItem } from "./components";

const ListWrapper = styled.div`
  display: block;
  width: 500px;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const List: FC<ListProps> = ({ list }) => (
  <ListWrapper>
    {list.map((row) => (
      <ListItem key={row.text} text={row.text} isComplete={row.isComplete} />
    ))}
  </ListWrapper>
);
