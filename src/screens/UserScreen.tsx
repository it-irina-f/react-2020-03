import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { logout } from "@/api/auth";
import { authorizedOnlyHoc } from "@/utils/authorizedOnlyHOC";

interface RouteParams {
  name: string;
}

class RawUserScreen extends React.PureComponent<
  RouteComponentProps<RouteParams>,
  {}
> {
  logout = async () => {
    await logout();
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Добро пожаловать, {this.props.match.params.name}!</h1>
        <button onClick={this.logout}>Выход</button>
      </div>
    );
  }
}

export const UserScreen = authorizedOnlyHoc(RawUserScreen, "/auth");
