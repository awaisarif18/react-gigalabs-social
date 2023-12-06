import { createSlice } from "@reduxjs/toolkit";

const isLoggedSlice = createSlice({
  name: "isLogged",
  initialState: false,
  reducers: {
    login: (state) => {
      return true;
    },
    logout: (state) => {
      return false;
    },
  },
});

export const { login, logout } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;
