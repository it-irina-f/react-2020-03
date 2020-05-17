import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "@/api/auth";
import { InputGroup, Input, Button } from "sancho";
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

export const AuthScreen: React.FC<{}> = () => {
  const [name, setName] = useState("");
  const history = useHistory();
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      await login(name);
      history.push(`/todo/${name}`);
    },
    [name]
  );
  return (
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
  );
};
