import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { Filter } from "./Filter";

const click = jest.fn();

describe("Test Component Filter", () => {
  it("renders Filter: check all", () => {
    expect(
      renderer.create(<Filter changeFilter={click} />).toJSON()
    ).toMatchSnapshot();
  });

  it("should be able to click the button", () => {
    const element = mount(<Filter changeFilter={click} />);
    element.find('div[role="button"]').at(2).simulate("click");
    expect(click).toHaveBeenCalled();
  });
});
