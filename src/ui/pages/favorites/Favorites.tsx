import React from "react";

import { moviesApi } from "core/services/movies.service";

import { ListItem } from "ui/pages/movies/components/List/ListItem";
import {
  ListContainer,
  NoDataMessage,
} from "ui/pages/movies/components/List/List.styles";

export const Favorites = () => {
  const { data } = moviesApi.useGetFavoritesQuery();

  const [removeFromFavorite] = moviesApi.useRemoveFromFavoriteMutation();

  return (
    <ListContainer>
      {!data || data?.movies?.length === 0 ? (
        <NoDataMessage>No results</NoDataMessage>
      ) : (
        data?.movies?.map((movie) => (
          <ListItem
            handleFavorite={() => removeFromFavorite(movie.imdbID)}
            key={movie.imdbID}
            movie={movie}
          />
        ))
      )}
    </ListContainer>
  );
};
