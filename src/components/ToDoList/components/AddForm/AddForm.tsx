import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
//import type { ListItemProps, ToggleCompleteProps } from "types/todo";


interface AddFormProps {}

export const AddForm: React.FC<AddFormProps> = ({}) => {
  return (
    <form>
      <input type="text" name="addlist" placeholder="добавить новую задачу" />

      <button type="submit">Добавить</button>
    </form>
  );
};
