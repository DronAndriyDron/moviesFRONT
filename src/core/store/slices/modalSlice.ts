import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { EditMovieModal, IMovie, ModalType } from "core/models";

interface ModalState {
  modalType: ModalType;
  isOpen: boolean;
  currentMovie: IMovie;
}

const initialState: ModalState = {
  modalType: {} as ModalType,
  isOpen: false,
  currentMovie: {} as IMovie,
};

const modalSlice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    openCreateModal(state, action: PayloadAction<ModalType>) {
      state.modalType = action.payload;
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    openModalWithData(state, action: PayloadAction<EditMovieModal>) {
      state.isOpen = true;
      state.modalType = action.payload.type;
      state.currentMovie = action.payload.movie;
    },
  },
});

export const { openCreateModal, closeModal, openModalWithData } =
  modalSlice.actions;

export default modalSlice.reducer;
