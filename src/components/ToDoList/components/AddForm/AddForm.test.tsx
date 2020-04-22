import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { AddForm } from "./AddForm";

const click = jest.fn();

describe("Test Component AddForm", () => {
  it("renders AddForm", () => {
    expect(
      renderer.create(<AddForm addListItem={click} />).toJSON()
    ).toMatchSnapshot();
  });

/*  it("should be able to click the button", () => {
    const element = mount(<AddForm addListItem={click} />);
    element.find("button").simulate("click");
    expect(click).toHaveBeenCalled();
  });*/
});
