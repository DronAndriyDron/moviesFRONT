import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { IMovie, ModalType } from "core/models";
import { ErrorText, Input, Label } from "ui/common";

import {
  BottomButtons,
  InputWrapper,
  ModalButton,
  ModalContainer,
  ModalForm,
  ModalTitle,
} from "./Modal.styles";

import { moviesApi } from "core/services";
import { useAppDispatch, useAppSelector } from "core/hooks";
import { closeModal } from "core/store/slices/modalSlice";

interface MovieModalProps {
  movie?: IMovie;
}

export const EditMovieModal: FC<MovieModalProps> = ({ movie }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMovie>();

  const [editMovie] = moviesApi.useEditMovieMutation();
  const { modalType } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const onSubmit = async (data: IMovie) => {
    await editMovie({ ...movie, ...data });
    dispatch(closeModal());
  };

  return (
    <ModalContainer>
      <ModalForm action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <ModalTitle>
          {modalType === ModalType.EDIT_MOVIE ? "Edit Movie" : "Add Movie"}
        </ModalTitle>
        <InputWrapper>
          <Label htmlFor="Title">Title</Label>
          <Input
            defaultValue={movie?.Title}
            isError={!!errors.Title}
            {...register("Title", { required: true })}
          />
          {errors.Title && <ErrorText>Title is a required field.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Year">Year</Label>
          <Input
            defaultValue={movie?.Year}
            isError={!!errors.Year}
            {...register("Year", { required: true })}
          />
          {errors.Year && <ErrorText>Year is a required field.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Poster">Poster</Label>
          <Input
            defaultValue={movie?.Poster}
            isError={!!errors.Poster}
            {...register("Poster", { required: true })}
          />
          {errors.Poster && <ErrorText>Poster is a required field.</ErrorText>}
        </InputWrapper>
        <BottomButtons>
          <ModalButton
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </ModalButton>
          <ModalButton type="submit">Save</ModalButton>
        </BottomButtons>
      </ModalForm>
    </ModalContainer>
  );
};
