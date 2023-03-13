import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../Feature/cake/cakeSlice";
import iceCreamReducer from "../Feature/icecream/icecreamSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
  },
});

export default store;
