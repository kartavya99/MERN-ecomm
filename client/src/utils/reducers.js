import { useReducer } from "react";

import { ADD_TO_CART, REMOVE_FROM_CART } from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.cart],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((newProduct) => newProduct._id !== action._id),
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
