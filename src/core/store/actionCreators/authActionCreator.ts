import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { api, TOKEN } from "core/utils";
import { IAuth, IAuthResponse } from "core/models";

export const signIn = createAsyncThunk(
  "auth/login",
  async (authData: IAuth, thunkAPI) => {
    try {
      const { data } = await api.post<IAuthResponse>("/auth/login", {
        ...authData,
      });
      localStorage.setItem(TOKEN, data.token);
    } catch (e) {
      const err = e as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/login",
  async (authData: IAuth, thunkAPI) => {
    try {
      await api.post<IAuthResponse>("/auth/register", {
        ...authData,
      });
    } catch (e) {
      const err = e as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
