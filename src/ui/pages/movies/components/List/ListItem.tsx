import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { StarFill } from "@styled-icons/bootstrap/StarFill";
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";
import { EditOutline } from "@styled-icons/evaicons-outline/EditOutline";

import { useAppDispatch } from "core/hooks";
import { openModalWithData } from "core/store/slices/modalSlice";
import { IMovie, ModalType } from "core/models";

import {
  ControlButton,
  ControlButtons,
  ListItemContainer,
  MovieInfoBlock,
  MovieInfoContainer,
  MovieTitle,
  PosterImg,
} from "./List.styles";

interface ListItemProps {
  movie: IMovie;
  handleFavorite: () => void;
}

export const ListItem: FC<ListItemProps> = ({ movie, handleFavorite }) => {
  const { Year, Title, Poster, imdbID } = movie;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <ListItemContainer onClick={() => navigate(`/movie/${imdbID}`)}>
      <PosterImg src={Poster} alt="" />
      <MovieInfoBlock>
        <MovieTitle>
          {Title} ({Year})
        </MovieTitle>
        <MovieInfoContainer></MovieInfoContainer>
      </MovieInfoBlock>
      <ControlButtons>
        <ControlButton>
          <StarFill
            onClick={(e) => {
              handleFavorite();
              e.stopPropagation();
            }}
            size={20}
            color="#0064ff"
          />
        </ControlButton>
        <ControlButton
          onClick={(e) => {
            dispatch(openModalWithData({ movie, type: ModalType.EDIT_MOVIE }));
            e.stopPropagation();
          }}
        >
          <EditOutline size={25} color="#0064ff" />
        </ControlButton>
        <ControlButton>
          <Delete
            onClick={(e) => {
              dispatch(
                openModalWithData({ movie, type: ModalType.DELETE_MOVIE })
              );
              e.stopPropagation();
            }}
            size={25}
            color="#0064ff"
          />
        </ControlButton>
      </ControlButtons>
    </ListItemContainer>
  );
};
