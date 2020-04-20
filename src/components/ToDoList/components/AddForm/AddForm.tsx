import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
//import type { ListItemProps, ToggleCompleteProps } from "types/todo";


// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const AddForm: React.FC<Props> = ({}) => {
  return (
    <form>
      <input type="text" name={"addlist"} />

      <button type="submit">Добавить</button>
    </form>
  );
};
