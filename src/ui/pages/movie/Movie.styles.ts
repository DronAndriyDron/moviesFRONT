import styled from "styled-components";

import { theme } from "core/styles";

export const PosterImg = styled.img`
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  gap: 20px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const MovieTitle = styled.h2`
  font-weight: 600;
  font-size: 23px;
  color: ${theme.colors.text};
`;

export const MovieInfoItem = styled.div`
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid ${theme.colors.grey};
`;
export const MovieSubtitle = styled.h3`
  font-weight: 600;
`;

export const MovieInfoData = styled.p``;

export const MovieTopBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
