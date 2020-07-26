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
      renderer
        .create(
          <List
            list={list}
            toggleComplete={click}
            deleteListItem={click}
            handleEdit={click}
            saveListItem={click}
            editId={-1}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("render list where 1 editing item", () => {
    expect(
      renderer
        .create(
          <List
            list={list}
            toggleComplete={click}
            deleteListItem={click}
            handleEdit={click}
            saveListItem={click}
            editId={0}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("renders empty list", () => {
    expect(
      renderer
        .create(
          <List
            list={[]}
            toggleComplete={click}
            deleteListItem={click}
            handleEdit={click}
            saveListItem={click}
            editId={-1}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("simulate onChange checkbox by list", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={-1}
      />
    );
    wrapper.find("input").at(3).simulate("change");
    expect(click).toHaveBeenCalled();
  });

  it("simulate click Delete List Item", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={-1}
      />
    );
    wrapper
      .find("div")
      .at(1)
      .find("div[id='deleteListItem_1']")
      .simulate("click");
    expect(click).toHaveBeenCalled();
  });

  it("check sort list: first element isComplete = false", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={-1}
      />
    );
    const checkbox = wrapper.find("div").at(1).find("input");
    expect(checkbox.prop("checked")).toBe(false);
  });

  it("check sort list: first element isComplete = true", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={-1}
      />
    );
    const checkbox = wrapper.find("input[name='checkbox_0']");
    expect(checkbox.prop("checked")).toBe(true);
  });

  it("check sort list: first element name", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={-1}
      />
    );
    expect(wrapper.find("div").at(1).find("label").text()).toEqual(
      "Сделать ДЗ"
    );
  });

  it("check sort list: last element name", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={-1}
      />
    );
    expect(
      wrapper.find("input[name='checkbox_2']").closest("label").text()
    ).toEqual("Купить продукты");
  });

  it("find manage-buttons", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={-1}
      />
    );
    expect(wrapper.find("div[role='button']")).toHaveLength(10);
  });

  it("simulate click Edit List Item", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={-1}
      />
    );
    wrapper
      .find("div")
      .at(1)
      .find("div[id='editListItem_1']")

      .simulate("click");
    expect(click).toHaveBeenCalled();
  });

  it("find form and buttons for editing", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={1}
      />
    );
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("button[name='saveEditing']")).toHaveLength(1);
    expect(wrapper.find("div[id='cancelEditing_1']")).toHaveLength(1);
  });

  it("simulate click Save List Item", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={1}
      />
    );
    wrapper.find("button[name='saveEditing']").simulate("submit");
    expect(click).toHaveBeenCalled();
  });

  it("simulate click Cancel Editing", () => {
    const wrapper = mount(
      <List
        list={list}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={1}
      />
    );
    wrapper.find("div[id='cancelEditing_1']").simulate("click");
    expect(click).toHaveBeenCalled();
  });

  it("check message for empty list", () => {
    const wrapper = mount(
      <List
        list={[]}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
        saveListItem={click}
        editId={-1}
      />
    );
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("div").text()).toEqual("Список пустой");
  });
});
