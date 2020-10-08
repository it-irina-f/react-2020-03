import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";

import { ToDoList } from "./ToDoList";

const list = [
  { id: 0, text: "Полить цветы", isComplete: true },
  { id: 1, text: "Сделать ДЗ", isComplete: false },
  { id: 2, text: "Купить продукты", isComplete: true },
  { id: 3, text: "Приготовить ужин", isComplete: false },
  { id: 4, text: "Уборка квартиры", isComplete: false },
];

describe("Component ToDoList", () => {
  it("renders list", () => {
    expect(renderer.create(<ToDoList />).toJSON()).toMatchSnapshot();
  });
});

jest.useFakeTimers();

describe("Render ToDoList: check func setTimeout", () => {
  const getComponent = () => shallow(<ToDoList />);

  it("should call setTimeout on mounting", () => {
    const component = getComponent();
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);
  });

  const wrapper = mount(<ToDoList />);

  it("renders preloader", () => {
    expect(wrapper.find("h1").text()).toEqual("Загрузка данных...");
  });

  it("render only one  h1", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("not render input element", () => {
    setTimeout(() => {
      expect(wrapper.find("input")).toHaveLength(0);
    }, 1000);
  });

  it("render input element", () => {
    setTimeout(() => {
      expect(wrapper.find("input")).toHaveLength(1);
    }, 3100);
  });
});
