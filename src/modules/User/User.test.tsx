import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ToDoState } from "@/AppStore";
import { User } from "./User";

const store = configureMockStore<ToDoState>([])({
  login: {
    status: 1,
    username: "Irina",
  },
});

describe("User Test", () => {
  const screen = mount(
    <Provider store={store}>
      <User />
    </Provider>
  );

  it("should render username from store", () => {
    expect(screen.text().includes("Irina")).toBe(true);
  });

  it("should render button for logout", () => {
    expect(screen.find("button").text().includes("Выход")).toBe(true);
  });

  it("should call logout when click on button", () => {
    screen.find("Button").simulate("click");
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "user/logout", payload: undefined });
  });
});
