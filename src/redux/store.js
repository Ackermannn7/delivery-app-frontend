import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authorization";
import { productsReducer } from "./slices/products";
import { shopsReducer } from "./slices/shops";

const store = configureStore({
  reducer: {
    shops: shopsReducer,
    products: productsReducer,
    auth: authReducer,
  },
});

export default store;
