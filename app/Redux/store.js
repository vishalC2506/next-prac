import { configureStore } from "@reduxjs/toolkit";
import navActiveReducer from "./navActiveSlice";
export const Store = configureStore({
  reducer: { navActiveReducer },
  devTools: process.env.NODE_ENV !== "production",
});
