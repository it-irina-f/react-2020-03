import React, { useCallback, useState } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { isEmpty } from "ramda";

import { ToDoState } from "@/AppStore";

import { authSlice } from "./reducer";
import { Button, Input, InputGroup } from "sancho";
import styled from "@emotion/styled";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 460px;
  height: 160px;
  padding: 20px;
  margin: 50px auto 20px;
  border-radius: 12px;
  box-shadow: rgba(52, 58, 64, 0.15) 0px 1px 10px 0px,
    rgba(52, 58, 64, 0.1) 0px 6px 12px 0px,
    rgba(52, 58, 64, 0.12) 0px 6px 15px -2px;
`;

Input.displayName = "Input";
Form.displayName = "Form";

const mapStateToProps = ({ login }: ToDoState) => ({
  ...login,
});

const mapDispatchToProps = {
  login: authSlice.actions.login,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export const AuthComponent: React.FC<Props> = ({ username, login }) => {
  const [name, setName] = useState(username);
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (!isEmpty(name)) {
        login(name);
      }
    },
    [name, login]
  );
  return isEmpty(username) ? (
    <Form onSubmit={onSubmit}>
      <InputGroup label="Логин">
        <Input
          placeholder="Введите имя"
          value={name}
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
          type="text"
          inputSize="lg"
        />
      </InputGroup>
      <Button intent="primary" type="submit" size="lg" block>
        Вход
      </Button>
    </Form>
  ) : (
    <Redirect to="/todo" />
  );
};

export const Auth = connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
