import React, { FC } from "react";
import { ToDoList, AccessChecker, getToDoModule } from "@/modules";
import { DynamicModuleLoader } from "redux-dynamic-modules";

export const ToDoScreen = () => (
  <DynamicModuleLoader modules={[getToDoModule()]}>
    <AccessChecker>
      <ToDoList />
    </AccessChecker>
  </DynamicModuleLoader>
);
