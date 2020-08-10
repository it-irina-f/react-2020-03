import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { ManageButton } from "./Buttons";
import { IconEdit, IconSave, IconTrash2, IconX } from "sancho";

const click = jest.fn();

describe("Component ManageButton", () => {
  it("renders button editListItem", () => {
    expect(
      renderer
        .create(
          <ManageButton
            icon={<IconEdit />}
            onClick={click}
            label="editListItem"
            id="editListItem_0"
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("renders button deleteListItem", () => {
    expect(
      renderer
        .create(
          <ManageButton
            icon={<IconTrash2 />}
            onClick={click}
            label="deleteListItem"
            id="deleteListItem_0"
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("renders button cancelEditing", () => {
    expect(
      renderer
        .create(
          <ManageButton
            icon={<IconX />}
            onClick={click}
            label="cancelEditing"
            id="cancelEditing_0"
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("renders button saveEditing", () => {
    expect(
      renderer
        .create(
          <ManageButton
            icon={<IconSave />}
            name="saveEditing"
            label="saveEditing"
            isSubmit={true}
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
  it("should be able to click the button Edit Item", () => {
    const wrapper = mount(
      <ManageButton
        icon={<IconEdit />}
        onClick={click}
        label="editListItem"
        id="editListItem_0"
      />
    );
    wrapper.find("div[id='editListItem_0']").simulate("click");
    expect(click).toHaveBeenCalled();
  });
  it("should be able to click the button Delete Item", () => {
    const wrapper = mount(
      <ManageButton
        icon={<IconTrash2 />}
        onClick={click}
        label="deleteListItem"
        id="deleteListItem_0"
      />
    );
    wrapper.find("div[id='deleteListItem_0']").simulate("click");
    expect(click).toHaveBeenCalled();
  });
  it("should be able to click the button cancelEditing", () => {
    const wrapper = mount(
      <ManageButton
        icon={<IconX />}
        onClick={click}
        label="cancelEditing"
        id="cancelEditing_0"
      />
    );
    wrapper.find("div[id='cancelEditing_0']").simulate("click");
    expect(click).toHaveBeenCalled();
  });
});
