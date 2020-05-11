import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { ListItemEdit } from "./ListItemEdit";

const listItem1 = { id: 0, text: "Полить цветы", isComplete: true };
const listItem2 = { id: 1, text: "Сделать ДЗ", isComplete: false };

const click = jest.fn();

describe("Component ListItemEdit", () => {
  it("renders form ListItemEdit", () => {
    expect(
      renderer
        .create(
          <ListItemEdit
            listItem={listItem1}
            handleEdit={click}
            saveListItem={click}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });

  it("should be able to click the button save new value Item", () => {
    const wrapper = mount(
      <ListItemEdit
        listItem={listItem2}
        handleEdit={click}
        saveListItem={click}
      />
    );
    wrapper.find("input").simulate("change", {
      target: { value: "оплатить жкх" },
    });
    wrapper.find("button[name='saveEditing']").simulate("submit");
    expect(click).toHaveBeenCalled();
  });

  it("should be able to click the button cancel editing Item", () => {
    const wrapper = mount(
      <ListItemEdit
        listItem={listItem2}
        handleEdit={click}
        saveListItem={click}
      />
    );
    wrapper.find("div[id='cancelEditing_1']").simulate("click");
    expect(click).toHaveBeenCalled();
  });
});
