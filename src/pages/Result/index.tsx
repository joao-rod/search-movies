import React from 'react';

import { Title } from '../../components/Title';
import * as S from './styles';
import Image1 from '../../assets/image1.jpg';

export const Result: React.FC = () => {
  return (
    <>
      <Title />

      <S.Label>
        <h2>Resultado</h2>
        <hr />
      </S.Label>

      <S.Info>
        <img src={Image1} alt="Capa" />

        <div>
          <h2>Velozes e Furiosos 9</h2>
          <h3>Lançamento: 2021</h3>
          <h3>Nota IMDb: 7.8</h3>
          <h3>Vin Diesel, Jonh Cena, Jordana Brewster, Michelle Rodrigues, Paul Brien</h3>
        </div>
      </S.Info>

      <S.Presentation>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptas neque nihil, est minima culpa maxime, nostrum 
        temporibus porro repellat rem nulla! Accusantium consequuntur
        amet hic vitae quis possimus praesentium officia.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptas neque nihil, est minima culpa maxime, nostrum 
        temporibus porro repellat rem nulla! Accusantium consequuntur
        amet hic vitae quis possimus praesentium officia.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptas neque nihil, est minima culpa maxime, nostrum 
        temporibus porro repellat rem nulla! Accusantium consequuntur
        amet hic vitae quis possimus praesentium officia.
      </S.Presentation>
    </>
  );
}