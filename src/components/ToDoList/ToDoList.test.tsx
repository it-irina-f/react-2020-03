import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { ToDoList } from "./ToDoList";

const click = jest.fn();

describe("Component ToDoList", () => {
  it("renders list", () => {
    expect(renderer.create(<ToDoList />).toJSON()).toMatchSnapshot();
  });
});
