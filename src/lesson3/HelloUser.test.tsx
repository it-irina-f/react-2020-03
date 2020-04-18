import React from "react";
import { shallow } from "enzyme";

import { HelloUser } from "./HelloUser";

const incMock = jest.fn();

describe("test component HelloUser", () => {
  it("Default render", () => {
    expect(shallow(<HelloUser />).matchesElement(<div>Hello, World</div>)).toBe(
      true
    );
  });

  it("Default render with prop", () => {
    expect(
      shallow(<HelloUser username={"Irina"} />).matchesElement(
        <div>Hello, Irina</div>
      )
    ).toBe(true);
  });
});
