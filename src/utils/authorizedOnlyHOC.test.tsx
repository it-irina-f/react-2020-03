import React from "react";
import { authorizedOnlyHoc } from "@/utils/authorizedOnlyHOC";
import { mount } from "enzyme";
import { isLoggedIn } from "@/api/auth";

const sleep = (x: number) => new Promise((r) => setTimeout(r, x));

jest.mock("@/api/auth", () => ({
  isLoggedIn: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  Redirect: function Redirect(props: any) {
    return <div>Redirect: {JSON.stringify(props)}</div>;
  },
}));

describe("authorizedOnlyHoc Test", () => {
  interface ComponentProps {
    name: string;
  }
  const Component: React.FC<ComponentProps> = ({ name }) => <span>{name}</span>;
  const WrappedComponent = authorizedOnlyHoc(Component);

  it("renders placeholder during request and component on success", async () => {
    (isLoggedIn as jest.Mock).mockResolvedValueOnce(true);
    const wrapper = mount(<WrappedComponent name="Irina" />);
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div>loader...</div>"`);
    await sleep(10);

    wrapper.update();
    expect(wrapper.html()).toMatchInlineSnapshot(`"<span>Irina</span>"`);
  });

  it("renders placeholder during request and redirect on failure", async () => {
    (isLoggedIn as jest.Mock).mockResolvedValueOnce(false);
    const wrapper = mount(<WrappedComponent name="Irina" />);
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div>loader...</div>"`);
    await sleep(10);
    wrapper.update();
    expect(wrapper.html()).toMatchInlineSnapshot(
      `"<div>Redirect: {\\"to\\":\\"/\\"}</div>"`
    );
  });
});
