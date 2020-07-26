import React from "react";
import { shallow } from "enzyme";

import { authSlice } from "./reducer";
import { AuthComponent } from "./Auth";

describe("Authorization Test", () => {
  it("navigates to user page on submit", async () => {
    jest.spyOn(authSlice.actions, "login");

    const username = "Irina";
    const component = shallow(
      <AuthComponent username="" login={authSlice.actions.login} />
    );

    component.find("Input").simulate("change", {
      target: {
        value: username,
      },
    });

    await component.find("Form").simulate("submit", {
      preventDefault: () => null,
    });

    expect(authSlice.actions.login).toHaveBeenCalledWith(username);
  });
});
