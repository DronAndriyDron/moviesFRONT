import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchValue: string;
  token: string;
}

const initialState: SearchState = {
  searchValue: "",
  token: "",
};

const searchSlice = createSlice({
  initialState,
  name: "search",
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {},
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
