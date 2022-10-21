import { IMovie } from "./movie";

export enum ModalType {
  ADD_MOVIE = "ADD_MOVIE",
  EDIT_MOVIE = "EDIT_MOVIE",
  DELETE_MOVIE = "DELETE_MOVIE",
}

export interface EditMovieModal {
  type: ModalType;
  movie: IMovie;
}
