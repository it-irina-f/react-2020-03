import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "./AsyncFlow/reducer";
import { getData } from "./AsyncFlow/actions";

export const App: FC<{}> = () => {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const makeRequest = () => {
    dispatch(getData());
  };

  return (
    <div className="App">
      <button onClick={makeRequest}>Make an api request</button>
      {state.isLoading && <div>Loading...</div>}
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}
      {state.data && (
        <>
          <h1>Data from https://swapi.dev/api/people/</h1>
          <p>{JSON.stringify(state.data, undefined, 2)}</p>
        </>
      )}
    </div>
  );
};
