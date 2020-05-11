import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { ListItem } from "./ListItem";

const listItem1 = { id: 0, text: "Полить цветы", isComplete: true };
const listItem2 = { id: 1, text: "Сделать ДЗ", isComplete: false };

const click = jest.fn();

describe("Component ListItem", () => {
  it("renders list item where isComplete=true", () => {
    expect(
      renderer
        .create(
          <ListItem
            listItem={listItem1}
            toggleComplete={click}
            deleteListItem={click}
            handleEdit={click}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("renders list item where isComplete=false", () => {
    expect(
      renderer
        .create(
          <ListItem
            listItem={listItem2}
            toggleComplete={click}
            deleteListItem={click}
            handleEdit={click}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("simulate onChange checkbox by list item where isComplete=true", () => {
    const wrapper = mount(
      <ListItem
        listItem={listItem1}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
      />
    );
    wrapper.find("input").simulate("change");
    expect(click).toHaveBeenCalled();
  });
  it("simulate onChange checkbox by list item where isComplete=false", () => {
    const wrapper = mount(
      <ListItem
        listItem={listItem2}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
      />
    );
    wrapper.find("input").simulate("change");
    expect(click).toHaveBeenCalled();
  });

  it("should be able to click the button Delete Item", () => {
    const wrapper = mount(
      <ListItem
        listItem={listItem2}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
      />
    );
    wrapper.find("button[name='deleteListItem']").simulate("click");
    expect(click).toHaveBeenCalled();
  });

  it("should be able to click the button Edit Item", () => {
    const wrapper = mount(
      <ListItem
        listItem={listItem2}
        toggleComplete={click}
        deleteListItem={click}
        handleEdit={click}
      />
    );
    wrapper.find("button[name='editListItem']").simulate("click");
    expect(click).toHaveBeenCalled();
  });
});
