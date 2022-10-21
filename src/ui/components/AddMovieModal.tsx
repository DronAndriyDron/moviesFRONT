import React from "react";
import { useForm } from "react-hook-form";

import { IMovieFull } from "core/models";
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
import { useAppDispatch } from "core/hooks";
import { closeModal } from "core/store/slices/modalSlice";

export const AddMovieModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMovieFull>();

  const [addMovie] = moviesApi.useAddMovieMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: IMovieFull) => {
    await addMovie({ ...data });
    dispatch(closeModal());
  };

  return (
    <ModalContainer>
      <ModalForm action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <ModalTitle>Add Movie</ModalTitle>
        <InputWrapper>
          <Label htmlFor="Title">Title</Label>
          <Input
            isError={!!errors.Title}
            {...register("Title", { required: true })}
          />
          {errors.Title && <ErrorText>Title is a required field.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Year">Year</Label>
          <Input
            isError={!!errors.Year}
            {...register("Year", { required: true })}
          />
          {errors.Year && <ErrorText>Year is a required field.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Runtime">Runtime</Label>
          <Input
            isError={!!errors.Runtime}
            {...register("Runtime", { required: true })}
          />
          {errors.Runtime && (
            <ErrorText>Runtime is a required field.</ErrorText>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Genre">Genre</Label>
          <Input
            isError={!!errors.Genre}
            {...register("Genre", { required: true })}
          />
          {errors.Genre && <ErrorText>Genre is a required field.</ErrorText>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Director">Director</Label>
          <Input
            isError={!!errors.Director}
            {...register("Director", { required: true })}
          />
          {errors.Director && (
            <ErrorText>Director is a required field.</ErrorText>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="Poster">Poster</Label>
          <Input
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
