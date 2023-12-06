import { configureStore } from "@reduxjs/toolkit";
import isLoggedReducer from "./loggedStatus/statusSlice";
export const store = configureStore({
  reducer: {
    isLogged: isLoggedReducer,
  },
});

export const RootState = store.getState();

export const AppDispatch = store.dispatch;
