import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state = initialState, action) => {
      state.numOfCake--;
    },
    restock: (state = initialState, action) => {
      state.numOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restock } = cakeSlice.actions;
