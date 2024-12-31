import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// action
const addToCart = createAction("ADD_TO_CART");

// reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log("oncreate state: ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("STORE STATE: ", store.getState());
});

// dispatch
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 10 }));
store.dispatch(login());
