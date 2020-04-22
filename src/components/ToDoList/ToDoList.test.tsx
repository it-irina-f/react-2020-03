import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { ToDoList } from "./ToDoList";

const click = jest.fn();

const list = [
  { id: 0, text: "Полить цветы", isComplete: true },
  { id: 1, text: "Сделать ДЗ", isComplete: false },
  { id: 2, text: "Купить продукты", isComplete: true },
  { id: 3, text: "Приготовить ужин", isComplete: false },
  { id: 4, text: "Уборка квартиры", isComplete: false },
];

describe("Component ToDoList", () => {
  it("renders list", () => {
    expect(
      renderer.create(<ToDoList list={list} />).toJSON()
    ).toMatchSnapshot();
  });
});
