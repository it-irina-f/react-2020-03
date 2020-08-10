import React from "react";
import { AccessChecker, ToDoList } from "@/components";

export const ToDoScreen = () => (
  <AccessChecker>
    <ToDoList />
  </AccessChecker>
);
