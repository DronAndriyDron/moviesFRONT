import styled from "styled-components";

import { theme } from "core/styles";

export const Label = styled.label`
  font-weight: 600;
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  color: ${theme.colors.text};
`;

export const Input = styled.input<{ isError: boolean }>`
  width: 100%;
  max-height: 40px;
  border-radius: 10px;
  border: ${(props) =>
    props.isError ? "2px solid red" : `2px solid ${theme.colors.grey}`};
  outline: none;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  transition: all 200ms ease-in-out;
  padding: 10px;

  &:hover,
  &:focus {
    border-color: ${theme.colors.blue};
  }
`;

export const ErrorText = styled.p`
  margin: 6px 0 0;
  color: red;
  font-weight: bold;
  font-size: 15px;
  line-height: normal;
`;
