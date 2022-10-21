import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { moviesApi } from "core/services";
import searchSlice from "./slices/searchSlice";
import modalSlice from "./slices/modalSlice";

const rootReducer = combineReducers({
  search: searchSlice,
  modal: modalSlice,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        moviesApi.middleware,
      ]),
  });

export type AppStore = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState["dispatch"];
