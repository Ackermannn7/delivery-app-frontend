import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authorization";
import { productsReducer } from "./slices/products";

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
});

export default store;
