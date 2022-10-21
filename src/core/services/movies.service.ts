import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IMovie, IMovieFullResponse, IMovieResponse } from "core/models";
import { TOKEN } from "core/utils";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        headers.set("authorization", `token ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Movies", "Favorites"],
  endpoints: (build) => ({
    searchMovies: build.query<IMovieResponse, string>({
      query: (searchValue: string) => ({
        url: `/movies?search=${searchValue}`,
      }),
      providesTags: () => ["Movies"],
    }),
    addMovie: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: `/movies`,
        method: "POST",
        body: movie,
      }),
      invalidatesTags: ["Movies"],
    }),
    deleteMovie: build.mutation<IMovie, string>({
      query: (id) => ({
        url: `/movies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Movies"],
    }),
    editMovie: build.mutation<IMovie, IMovie>({
      query: (movie) => ({
        url: `/updateMovie/${movie.imdbID}`,
        method: "PATCH",
        body: movie,
      }),
      invalidatesTags: ["Movies"],
    }),
    getMovie: build.query<IMovieFullResponse, string>({
      query: (id) => ({
        url: `/movies/${id}`,
      }),
    }),
    addToFavorite: build.mutation<IMovie, string>({
      query: (id) => ({
        url: `/addToFavorite/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Favorites"],
    }),
    removeFromFavorite: build.mutation<IMovie, string>({
      query: (id) => ({
        url: `/removeFavorite/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favorites"],
    }),
    getFavorites: build.query<IMovieResponse, void>({
      query: () => ({
        url: `/favorites`,
      }),
      providesTags: () => ["Favorites"],
    }),
  }),
});
