import styled from "styled-components";

import { theme } from "core/styles";

export const TopBlockContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const TopBlockButtons = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  margin-left: 4rem;
`;

export const TopBlockButton = styled.button<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  width: 50px;
  cursor: pointer;
  border: 2px solid ${theme.colors.blue};

  &:nth-child(1) {
    border-radius: 5px 0 0 5px;
  }

  &:nth-child(2) {
    border-radius: 0 5px 5px 0;
  }
`;

export const SearchWrapper = styled.div`
  width: 90%;
  position: relative;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 2px solid ${theme.colors.grey};
  border-right: none;
  padding: 5px;
  border-radius: 5px 0 0 5px;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover,
  &:focus {
    border-color: ${theme.colors.lightBlue};
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid ${theme.colors.blue};
  background: ${theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 5px 5px 0;
  font-size: 20px;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: ${theme.colors.lightBlue};
  }
`;
