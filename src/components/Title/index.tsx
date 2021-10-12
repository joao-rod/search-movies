import React from 'react';
import * as S from './style';

export const Title: React.FC = () => (
  <S.Header>
    <S.TitleSearch>Search</S.TitleSearch><S.TitleMovies>Movies</S.TitleMovies>
  </S.Header>
);