import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

console.table("oncreate store: ", store.getState())

store.subscribe(() => {
    console.log("STORE ONCHANGE: ", store.getState());
})

export default store