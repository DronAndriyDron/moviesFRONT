import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Search as SearchIcon } from "@styled-icons/bootstrap/Search";
import { Star } from "@styled-icons/bootstrap/Star";
import { Plus } from "@styled-icons/boxicons-regular/Plus";

import { useAppDispatch, useAppSelector } from "core/hooks";
import { setSearch } from "core/store/slices/searchSlice";
import { moviesApi } from "core/services";
import useDebounce from "core/hooks/useDebounce";
import { openCreateModal } from "core/store/slices/modalSlice";
import { ModalType } from "core/models";

import {
  SearchButton,
  SearchInput,
  SearchWrapper,
  TopBlockButton,
  TopBlockButtons,
  TopBlockContainer,
} from "./TopBlock.styles";

export const TopBlock = () => {
  const [value, setSearchValue] = useState("");
  const { searchValue } = useAppSelector((state) => state.search);
  const { refetch } = moviesApi.useSearchMoviesQuery(searchValue);
  const debouncedValue = useDebounce<string>(value, 500);
  const dispatch = useAppDispatch();

  const handleChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    refetch();
    dispatch(setSearch(value));
  }, [debouncedValue]);

  return (
    <TopBlockContainer>
      <SearchWrapper>
        <SearchInput
          value={value}
          onChange={(e) => handleChangeSearch(e.target.value)}
        />
        <SearchButton>
          <SearchIcon size={15} color="#fff" />
        </SearchButton>
      </SearchWrapper>
      <TopBlockButtons>
        <TopBlockButton
          onClick={() => navigate("/favorites")}
          backgroundColor="#0064ff"
        >
          <Star size={20} color="#fff" />
        </TopBlockButton>
        <TopBlockButton
          backgroundColor="#fff"
          onClick={() => dispatch(openCreateModal(ModalType.ADD_MOVIE))}
        >
          <Plus size={25} color="#0064ff" />
        </TopBlockButton>
      </TopBlockButtons>
    </TopBlockContainer>
  );
};
