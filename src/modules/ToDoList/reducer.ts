import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckState } from "@/modules/Auth/reducer";

interface ListItemProps {
  id: number;
  text: string;
  isComplete: boolean;
}

export const initialState: {
  isLoading: boolean;
  editId: number;
  filter: string;
  list: ListItemProps[];
  queryResult: ListItemProps[];
} = {
  list: [],
  isLoading: false,
  editId: -1,
  filter: "all",
  queryResult: [],
};

export type PayloadSaveItem = PayloadAction<{
  id: number;
  text: string;
}>;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addListItem: (state, { payload }: PayloadAction<string>) => {
      const newList = [
        ...state.list,
        {
          id: Date.now(),
          text: payload,
          isComplete: false,
        },
      ];
      return {
        ...state,
        list: newList,
      };
    },
    changeFilter: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        filter: payload,
      };
    },
    searchItem: (state, { payload }: PayloadAction<string>) => {
      const queryResult = state.list.filter((row) => {
        return row.text.toLowerCase().indexOf(payload.toLowerCase()) != -1;
      });

      return {
        ...state,
        queryResult: queryResult,
      };
    },
    toggleComplete: (state, { payload }: PayloadAction<number>) => {
      const updList = state.list.map((row) => {
        if (row.id === payload) {
          return { ...row, isComplete: !row.isComplete };
        }
        return row;
      });
      return {
        ...state,
        list: updList,
      };
    },
    deleteItem: (state, { payload }: PayloadAction<number>) => {
      const updList = state.list.filter((row) => {
        return row.id !== payload;
      });
      return {
        ...state,
        list: updList,
      };
    },
    editItem: (state, { payload }: PayloadAction<number>) => {
      return {
        ...state,
        editId: payload,
      };
    },
    saveItem: (state, { payload }: PayloadSaveItem) => {
      const updList = state.list.map((row) => {
        if (row.id === payload.id) {
          return { ...row, text: payload.text };
        }
        return row;
      });
      return {
        ...state,
        list: updList,
      };
    },
  },
});

export const { reducer, actions } = todoSlice;
