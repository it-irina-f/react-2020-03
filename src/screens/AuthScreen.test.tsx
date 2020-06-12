import React from "react";

import { AuthScreen } from "./AuthScreen";
import { shallow } from "enzyme";
import { login } from "@/api/auth";
import renderer from "react-test-renderer";

const mockHistory = { push: jest.fn() };
jest.mock("react-router-dom", () => ({
  useHistory: () => mockHistory,
}));

jest.mock("@/api/auth", () => ({
  login: jest.fn(),
}));

describe("AuthScreen Test", () => {
  it("renders form for authorization", () => {
    expect(renderer.create(<AuthScreen />).toJSON()).toMatchSnapshot();
  });

  it("input name and submit form", async () => {
    const name = "Irina";
    const screen = shallow(<AuthScreen />);

    screen.find("Input").simulate("change", { target: { value: name } });
    await screen
      .find("Form")
      .simulate("submit", { preventDefault: () => null });

    expect(login).toHaveBeenCalledWith(name);
    expect(mockHistory.push).toHaveBeenCalledWith(`/todo/${name}`);
  });
});
