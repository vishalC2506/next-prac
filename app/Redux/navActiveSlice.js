import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const navActive = createSlice({
  name: "navActive",
  initialState,

  reducers: {
    changeActive: (state) => {
      state.value = !state.value;
    },
  },
});
export const { changeActive } = navActive.actions;
export default navActive.reducer;
