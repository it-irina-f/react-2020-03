import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { isEmpty } from "ramda";
import { ToDoState } from "@/AppStore";
import { actions } from "@/modules/Auth/reducer";
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

Button.displayName = "Button";

const mapStateToProps = ({ login }: ToDoState) => ({
  ...login,
});

const mapDispatchToProps = {
  logout: actions.logout,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

class UserComponent extends PureComponent<Props> {
  logout = () => {
    const { logout } = this.props;
    logout();
  };
  render() {
    const { username } = this.props;
    return (
      !isEmpty(username) && (
        <Header>
          <HeaderLoginWrap>
            <IconUser />
            <HeaderLogin>{username}</HeaderLogin>
          </HeaderLoginWrap>
          <Button
            onClick={this.logout}
            type="submit"
            intent="primary"
            size="sm"
          >
            Выход
          </Button>
        </Header>
      )
    );
  }
}

export const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent);
