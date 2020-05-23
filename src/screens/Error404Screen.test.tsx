import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { Error404Screen } from "./Error404Screen";

describe("Component Error404Screen", () => {
  it("renders page Error 404", () => {
    expect(renderer.create(<Error404Screen />).toJSON()).toMatchSnapshot();
  });

  const screen = shallow(<Error404Screen />);

  it("renders h1 and p", () => {
    expect(screen.find("h1").text()).toEqual("404");
    expect(screen.find("p").text()).toEqual("Page not found");
  });
});
