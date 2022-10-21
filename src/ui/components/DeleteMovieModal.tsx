import React from "react";

import { useAppDispatch, useAppSelector } from "core/hooks";
import { closeModal } from "core/store/slices/modalSlice";
import { moviesApi } from "core/services";

import {
  BottomButtons,
  ModalButton,
  ModalContainer,
  ModalTitle,
} from "./Modal.styles";

export const DeleteMovieModal = () => {
  const dispatch = useAppDispatch();
  const { currentMovie } = useAppSelector((state) => state.modal);
  const [deleteMovie] = moviesApi.useDeleteMovieMutation();

  const handleDeleteMovie = async () => {
    await deleteMovie(currentMovie.imdbID).then(() => {
      dispatch(closeModal());
    });
  };

  return (
    <ModalContainer>
      <ModalTitle>Are you sure that you want to delete?</ModalTitle>
      <BottomButtons>
        <ModalButton
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </ModalButton>
        <ModalButton onClick={handleDeleteMovie}>Delete</ModalButton>
      </BottomButtons>
    </ModalContainer>
  );
};
