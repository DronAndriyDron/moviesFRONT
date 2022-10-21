import styled from "styled-components";

import { theme } from "core/styles";

export const ModalContainer = styled.div`
  background: #fff;
  max-width: 700px;
  padding: 20px;
  width: 100%;
  position: absolute;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  color: ${theme.colors.text};
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomButtons = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const ModalButton = styled.button`
  width: 100%;
  height: 40px;
  color: ${theme.colors.lightBlue};
  background: #fff;
  border: 1px solid ${theme.colors.grey};
  border-radius: 8px;
  outline: none;
  appearance: none;
  position: relative;
  font-weight: 600;
  font-size: 15px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover,
  &:focus {
    color: #fff;
    background: ${theme.colors.blue};
    border: none;
  }
`;
