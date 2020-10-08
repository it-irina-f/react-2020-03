import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoState } from "@/AppStore";

interface ListItemProps {
  id: number;
  text: string;
  isComplete: boolean;
}

export const selectors = {
  todo: ({ todo }: ToDoState) => todo,
};

export const initialState: {
  isLoading: boolean;
  editId: number;
  filter: string;
  list: ListItemProps[];
  queryResult: ListItemProps[];
  textInput: string;
} = {
  list: [],
  isLoading: false,
  editId: -1,
  filter: "all",
  queryResult: [],
  textInput: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setList: (state, { payload }: PayloadAction<any>) => {
      return {
        ...state,
        list: payload,
      };
    },
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
      const textInput =
        payload != -1
          ? state.list.filter((row) => {
              return row.id === payload;
            })[0].text
          : "";
      return {
        ...state,
        editId: payload,
        textInput: textInput,
      };
    },
    saveItem: (state, { payload }: PayloadAction<string>) => {
      const updList = state.list.map((row) => {
        if (row.id === state.editId) {
          return { ...row, text: payload };
        }
        return row;
      });

      return {
        ...state,
        list: updList,
        editId: -1,
        textInput: "",
      };
    },
  },
});

export const { reducer, actions } = todoSlice;
