import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 40px auto;
  text-align: center;
  padding: 10px;
  font-size: 200%;
`;

export const Error404Screen: React.FC<{}> = () => {
  return (
    <Container>
      <h1>404</h1>
      <p>Page not found</p>
    </Container>
  );
};
