import React, { useState } from "react";
import { List } from "@/modules/ToDoList/List";
import { AddForm } from "@/modules/ToDoList/AddForm";
import { Filter } from "@/modules/ToDoList/Filter";
import { Search } from "@/modules/ToDoList/Search";
import styled from "@emotion/styled";

import { ToDoState } from "@/AppStore";
import { todoSlice } from "./reducer";
import { connect } from "react-redux";

const ToDoListWrapper = styled.div`
  display: block;
  width: 800px;
  margin: 10px auto;
  padding: 20px 50px;
`;

const TitleWrapper = styled.div`
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

const ManageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const mapStateToProps = ({ todo }: ToDoState) => ({
  ...todo,
});

const mapDispatchToProps = {
  addListItemHandler: todoSlice.actions.addListItem,
  changeFilterHandler: todoSlice.actions.changeFilter,
  searchItemHandler: todoSlice.actions.searchItem,
  toggleCompleteHandler: todoSlice.actions.toggleComplete,
  deleteItemHandler: todoSlice.actions.deleteItem,
  editItemHandler: todoSlice.actions.editItem,
  saveItemHandler: todoSlice.actions.saveItem,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const ToDoListComponent: React.FC<Props> = ({
  list,
  isLoading,
  editId,
  filter,
  queryResult,
  addListItemHandler,
  changeFilterHandler,
  searchItemHandler,
  toggleCompleteHandler,
  deleteItemHandler,
  editItemHandler,
  saveItemHandler,
}) => {
  return (
    <ToDoListWrapper>
      <TitleWrapper>Список дел</TitleWrapper>
      <ManageWrapper>
        <Search searchItem={searchItemHandler} />
        <Filter changeFilter={changeFilterHandler} />
      </ManageWrapper>
      {isLoading ? (
        <h1>Загрузка данных...</h1>
      ) : (
        <List
          list={queryResult.length === 0 ? list : queryResult}
          editId={editId}
          toggleComplete={toggleCompleteHandler}
          deleteListItem={deleteItemHandler}
          handleEdit={editItemHandler}
          saveListItem={saveItemHandler}
          filter={filter}
        />
      )}
      <AddForm addListItem={addListItemHandler} />
    </ToDoListWrapper>
  );
};
export const ToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoListComponent);
