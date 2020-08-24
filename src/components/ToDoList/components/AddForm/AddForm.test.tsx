import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { AddForm } from "./AddForm";

const click = jest.fn();

describe("Test Component AddForm", () => {
  it("renders AddForm", () => {
    expect(
      renderer.create(<AddForm addListItem={click} activeLength={2} />).toJSON()
    ).toMatchSnapshot();
  });

  it("should be able to click the button", () => {
    const element = mount(<AddForm addListItem={click} activeLength={2} />);
    element.find("button").simulate("submit");
    expect(click).toHaveBeenCalled();
  });
});
