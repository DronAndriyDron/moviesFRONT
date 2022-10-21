import React from "react";
import ReactDom from "react-dom";

import { useAppSelector } from "core/hooks";
import { ModalType } from "core/models";
import { DeleteMovieModal, AddMovieModal, EditMovieModal } from "ui/components";

import { ModalWrapper } from "./Modal.styles";

export const Modal = () => {
  const { isOpen, modalType, currentMovie } = useAppSelector(
    (state) => state.modal
  );
  const modalPlaceholderElement = document.getElementById("modal")!;

  const modals = {
    [ModalType.ADD_MOVIE]: <AddMovieModal />,
    [ModalType.EDIT_MOVIE]: <EditMovieModal movie={currentMovie} />,
    [ModalType.DELETE_MOVIE]: <DeleteMovieModal />,
  };

  return (
    <>
      {isOpen
        ? ReactDom.createPortal(
            <ModalWrapper>{modals[modalType]}</ModalWrapper>,
            modalPlaceholderElement
          )
        : null}
    </>
  );
};
