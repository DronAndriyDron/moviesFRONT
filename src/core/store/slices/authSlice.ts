import { createSlice } from "@reduxjs/toolkit";

import { signIn } from "../actionCreators/authActionCreator";

interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state) => {
      state.isAuth = true;
    });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
