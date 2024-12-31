// reducer : initial state awal

import { legacy_createStore } from "redux";

const cartReducer = (
  state = {
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store : varibale const penambah value ke statex

const store = legacy_createStore(cartReducer);
console.log("oncreate store : ", store.getState());

// subscribed : monitoring onchange state dengan store.subscribe

store.subscribe(() => {
    console.log("STORE CHANGE", store.getState())
})

// dispatch : action untuk menambah data dengan case action.type yang sesuai dengan yang ada di cartReducer

const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1)
