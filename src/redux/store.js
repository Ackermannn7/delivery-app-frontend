import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authorization";
import { productsReducer } from "./slices/products";
import { shopsReducer } from "./slices/shops";
import cart from "./slices/cart";
const store = configureStore({
  reducer: {
    cart,
    shops: shopsReducer,
    products: productsReducer,
    auth: authReducer,
  },
});

export default store;
