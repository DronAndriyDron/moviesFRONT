import styled from "styled-components";

import { theme } from "core/styles";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
`;

export const ListItemContainer = styled.div`
  display: flex;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  padding: 20px;
  cursor: pointer;
`;

export const MovieTitle = styled.h3`
  color: ${theme.colors.text};
  font-size: 28px;
  font-weight: 700;
`;

export const MovieInfoContainer = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const NoDataMessage = styled.p`
  margin: 0 auto;
`;

export const PosterImg = styled.img`
  border-radius: 8px;
  justify-self: flex-start;
`;

export const MovieInfoBlock = styled.div`
  margin-left: 30px;
  width: 100%;
`;

export const ControlButtons = styled.div`
  display: flex;
  height: 100%;
  margin-left: auto;
`;

export const ControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 40px;
  cursor: pointer;
  border: 1px solid ${theme.colors.grey};
  background: white;

  &:nth-child(1) {
    border-radius: 5px 0 0 5px;
  }

  &:nth-child(3) {
    border-radius: 0 5px 5px 0;
  }
`;
