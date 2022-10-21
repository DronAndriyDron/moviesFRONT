import React from "react";

import { TopBlock } from "./components";
import { Container } from "ui/common";

import { ListContainer, NoDataMessage } from "./components/List/List.styles";
import { ListItem } from "./components/List/ListItem";

import { useAppSelector } from "core/hooks";
import { moviesApi } from "core/services";

export const MovieList = () => {
  const { searchValue } = useAppSelector((state) => state.search);
  const { data } = moviesApi.useSearchMoviesQuery(searchValue, {
    skip: !searchValue,
  });
  const [addToFavorite] = moviesApi.useAddToFavoriteMutation();

  return (
    <Container>
      <TopBlock />
      <ListContainer>
        {!data || data?.movies?.length === 0 ? (
          <NoDataMessage>No results</NoDataMessage>
        ) : (
          data?.movies?.map((movie) => (
            <ListItem
              handleFavorite={() => addToFavorite(movie.imdbID)}
              key={movie.imdbID}
              movie={movie}
            />
          ))
        )}
      </ListContainer>
    </Container>
  );
};
