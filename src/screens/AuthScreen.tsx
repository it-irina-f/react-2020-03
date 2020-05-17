import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "@/api/auth";

export const AuthScreen: React.FC<{}> = () => {
  const [name, setName] = useState("");
  const history = useHistory();
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      await login(name);
      history.push(`/user/${name}`);
    },
    [name]
  );
  return (
    <form onSubmit={onSubmit}>
      <label>
        Логин:
        <input
          placeholder="Введите имя"
          value={name}
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
        />
      </label>
      <button>Вход</button>
    </form>
  );
};
