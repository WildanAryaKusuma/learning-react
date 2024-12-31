import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("initial store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("STORE STATE: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({
    id: 1,
    qty: 20
}))
