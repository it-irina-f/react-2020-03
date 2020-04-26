import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";

import { List } from "./List";

const list = [
  { id: 0, text: "Полить цветы", isComplete: true },
  { id: 1, text: "Сделать ДЗ", isComplete: false },
  { id: 2, text: "Купить продукты", isComplete: true },
  { id: 3, text: "Приготовить ужин", isComplete: false },
  { id: 4, text: "Уборка квартиры", isComplete: false },
];

const click = jest.fn();

describe("Component List", () => {
  it("renders list", () => {
    expect(
      renderer.create(<List list={list} toggleComplete={click} />).toJSON()
    ).toMatchSnapshot();
  });

  it("simulate onChange checkbox by list", () => {
    const wrapper = mount(<List list={list} toggleComplete={click} />);
    wrapper.find("input").at(3).simulate("change");
    expect(click).toHaveBeenCalled();
  });

  it("check sort list: first element isComplete = false", () => {
    const wrapper = mount(<List list={list} toggleComplete={click} />);
    const checkbox = wrapper.find("div").at(1).find("input");
    expect(checkbox.prop("checked")).toBe(false);
  });

  it("check sort list: first element isComplete = true", () => {
    const wrapper = mount(<List list={list} toggleComplete={click} />);
    const checkbox = wrapper.find("div").at(5).find("input");
    expect(checkbox.prop("checked")).toBe(true);
  });

  it("check sort list: first element name", () => {
    const wrapper = mount(<List list={list} toggleComplete={click} />);
    expect(wrapper.find("div").at(1).text()).toEqual("Сделать ДЗ");
  });

  it("check sort list: last element name", () => {
    const wrapper = mount(<List list={list} toggleComplete={click} />);
    expect(wrapper.find("div").at(5).text()).toEqual("Купить продукты");
  });
});
