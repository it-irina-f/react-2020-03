import React from "react";
import { ToDoList } from "@/components";
import { RouteComponentProps } from "react-router-dom";
import { logout } from "@/api/auth";
import { authorizedOnlyHoc } from "@/utils/authorizedOnlyHOC";
import { Button, IconUser } from "sancho";
import styled from "@emotion/styled";

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  padding: 10px;
  margin: -8px -8px 20px;
  border-bottom: 1px solid #ccc;
  align-items: center;
`;

const HeaderLoginWrap = styled.div`
  display: flex;
  margin-right: 15px;
  align-items: center;
`;

const HeaderLogin = styled.span`
  padding: 0 10px;
`;

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
        <Header>
          <HeaderLoginWrap>
            <IconUser />
            <HeaderLogin>{this.props.match.params.name}</HeaderLogin>
          </HeaderLoginWrap>
          <Button intent="primary" size="sm" onClick={this.logout}>
            Выход
          </Button>
        </Header>
        <ToDoList />
      </>
    );
  }
}

export const ToDoListScreen = authorizedOnlyHoc(RawUserScreen, "/auth");
