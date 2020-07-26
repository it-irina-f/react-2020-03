import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { Search } from "./Search";

const click = jest.fn();

describe("Test Component Search", () => {
  it("renders Search", () => {
    expect(
      renderer.create(<Search searchItem={click} />).toJSON()
    ).toMatchSnapshot();
  });

  it("should be able to click the button", () => {
    const element = mount(<Search searchItem={click} />);
    element.find("button").simulate("submit");
    expect(click).toHaveBeenCalled();
  });

  it("should be able to change input", () => {
    const element = mount(<Search searchItem={click} />);
    element
      .find("input[name='searchItems']")
      .simulate("change", { target: { value: "task", name: "searchItems" } });
    expect(element.find("input[name='searchItems']").props().value).toEqual(
      "task"
    );
  });
});
