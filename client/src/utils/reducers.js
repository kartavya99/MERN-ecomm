import { useReducer } from "react";

export const reducer = () => {};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
