import React from "react";
import { ToDoList } from "@/components";
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
    this.props.history.push("/auth");
  };
  render() {
    return (
      <>
        <div>
          <h1>Добро пожаловать, {this.props.match.params.name}!</h1>
          <button onClick={this.logout}>Выход</button>
        </div>
        <ToDoList />
      </>
    );
  }
}

export const ToDoListScreen = authorizedOnlyHoc(RawUserScreen, "/auth");
