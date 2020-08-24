import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import { ErrorBoundary } from "./ErrorBoundary";

const Something = () => null;

describe("ErrorBoundary", () => {
  it("should display an ErrorMessage if wrapped component throws", () => {
    const wrapper = mount(
      <ErrorBoundary>
        <Something />
      </ErrorBoundary>
    );

    const error = new Error("error test");

    wrapper.find(Something).simulateError(error);
    expect(wrapper.state()).toHaveProperty("hasError", true);
    expect(wrapper.find("h3").text()).toEqual("Слишком много активных задач");
  });
});
