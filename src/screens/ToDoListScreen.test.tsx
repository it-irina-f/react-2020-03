import React from "react";
import { ToDoListScreen } from "./ToDoListScreen";
import { shallow } from "enzyme";
import { logout } from "@/api/auth";
import renderer from "react-test-renderer";

const mockHistory = { push: jest.fn() };
jest.mock("react-router-dom", () => ({
  useHistory: () => mockHistory,
}));

jest.mock("@/api/auth", () => ({
  logout: jest.fn(),
}));

jest.useFakeTimers();

describe("ToDoListScreen Test", () => {
  it("renders page ToDoList", () => {
    expect(renderer.create(<ToDoListScreen />).toJSON()).toMatchSnapshot();
  });

  it("click for button LogOut", async () => {
    const screen = shallow(<ToDoListScreen />);

    setTimeout(() => {
      screen.find("Button").simulate("submit");

      expect(logout).toHaveBeenCalledWith();
      expect(mockHistory.push).toHaveBeenCalledWith(`/auth`);
    }, 1200);
  });
});
