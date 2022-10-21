import React, { FC } from "react";

import { MovieInfoData, MovieInfoItem, MovieSubtitle } from "../Movie.styles";

interface InfoProps {
  subtitle: string;
  info: string;
}

export const Info: FC<InfoProps> = ({ info, subtitle }) => {
  return (
    <MovieInfoItem>
      <MovieSubtitle>{subtitle}:&nbsp;</MovieSubtitle>
      <MovieInfoData>{info}</MovieInfoData>
    </MovieInfoItem>
  );
};
