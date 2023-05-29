import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchShops = createAsyncThunk("shops/fetchShops", async () => {
  const { data } = await axios.get("/shops");
  return data;
});

const initialState = {
  shops: {
    items: [],
    status: "loading",
  },
};

const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducer: {},
  extraReducers: {
    [fetchShops.pending]: (state) => {
      state.shops.items = [];
      state.shops.status = "loading";
    },

    [fetchShops.fulfilled]: (state, action) => {
      state.shops.items = action.payload;
      state.shops.status = "loaded";
    },

    [fetchShops.rejected]: (state) => {
      state.shops.items = [];
      state.shops.status = "error";
    },
  },
});

export const shopsReducer = shopsSlice.reducer;
