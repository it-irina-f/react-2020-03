import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { LOADING, SUCCESS, ERROR, ANALYTICS_CLICK } from "./const";
import type { PayloadLoading, Payload, PayloadProbability } from "./types";

export const loadingAction = createAction<PayloadLoading>(LOADING);
export const successAction = createAction<Payload>(SUCCESS);
export const errorAction = createAction<Payload>(ERROR);

export const getData = () => {
  return (dispatch: any) => {
    dispatch(loadingAction({ isLoading: true }));
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => {
        dispatch(successAction({ data: res.data.results }));
      })
      .catch((err) => {
        dispatch(errorAction({ error: err.message }));
      });
  };
};

export const probabilityAction = createAction<PayloadProbability>(
  ANALYTICS_CLICK
);
