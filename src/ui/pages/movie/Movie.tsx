import React from "react";
import { useParams } from "react-router-dom";

import { moviesApi } from "core/services";
import { Container } from "ui/common";

import { Info } from "./components/Info";

import {
  Content,
  MovieInfo,
  MovieTitle,
  MovieTopBlock,
  PosterImg,
} from "./Movie.styles";

export const Movie = () => {
  const { id } = useParams();
  const { data } = moviesApi.useGetMovieQuery(id!);

  console.log("data", data);
  return (
    <>
      {data ? (
        <Container>
          <Content>
            <PosterImg src={data.movie.Poster} />
            <MovieInfo>
              <MovieTopBlock>
                <MovieTitle>
                  {data.movie.Title} ({data.movie.Year})
                </MovieTitle>
              </MovieTopBlock>
              <Info info={data.movie.Runtime} subtitle="Runtime" />
              <Info info={data.movie.Genre} subtitle="Genre" />
              <Info info={data.movie.Director} subtitle="Director" />
            </MovieInfo>
          </Content>
        </Container>
      ) : null}
    </>
  );
};
