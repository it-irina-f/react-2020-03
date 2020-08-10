import React from "react";
import { ToDoList } from "@/modules";
import { AccessChecker } from "@/modules";

export const ToDoScreen = () => (
  <AccessChecker>
    <ToDoList />
  </AccessChecker>
);
