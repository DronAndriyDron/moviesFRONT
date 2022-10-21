export interface IMovie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

export interface IMovieResponse {
  movies: IMovie[];
}

export interface IMovieFullResponse {
  movie: IMovieFull;
}

export interface IMovieFull {
  id: number;
  Title: string;
  Runtime: string;
  Year: string;
  Director: string;
  Genre: string;
  Poster: string;
  imdbID: string;
}
