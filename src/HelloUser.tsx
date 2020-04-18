import React from "react";

interface Prop {
  username?: string;
}

export const HelloUser: React.FC<Prop> = ({ username }) => {
  return <div>Hello, {username || "World"}</div>;
};
