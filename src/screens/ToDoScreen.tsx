import React, { FC } from "react";
import { ToDoList, AccessChecker } from "@/modules";
import { DynamicModuleLoader } from "redux-dynamic-modules";

export const ToDoScreen = () => (
  <DynamicModuleLoader modules={[]}>
    <AccessChecker>
      <ToDoList />
    </AccessChecker>
  </DynamicModuleLoader>
);
