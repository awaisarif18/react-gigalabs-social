import isLoggedReducer from "./loggedStatus/statusSlice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "../services/index";
import userReducer from "./userData/userSlice";

const store = configureStore({
  reducer: combineReducers({
    isLogged: isLoggedReducer,
    user: userReducer,
    [ApiService.reducerPath]: ApiService.reducer,
  }),
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
    }).concat(ApiService.middleware);
    return middleware;
  },
});

export const AppDispatch = store.dispatch;
export const rootReducer = combineReducers({
  isLoggedReducer,
  ApiService,
  userReducer,
});

export { store };
