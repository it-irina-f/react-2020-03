import React from "react";
import { shallow } from "enzyme";

import { Error404 } from "./Error404";

describe("Component Error404Screen", () => {
  const screen = shallow(<Error404 />);

  it("renders h1 and p", () => {
    expect(screen.find("h1").text()).toEqual("404");
    expect(screen.find("p").text()).toEqual("Page not found");
  });
});
