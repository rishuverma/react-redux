// const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numOfIceCream: 10,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state = initialState, action) => {
      state.numOfIceCream--;
    },
    restock: (state = initialState, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restock } = iceCreamSlice.actions;
