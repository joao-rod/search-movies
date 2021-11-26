import React from 'react';

import { Title } from '../../components/Title/index';
import Capa from '../../assets/logo.jpg';
import * as S from './styles';

export const Result: React.FC = () => {
  return (
    <>
      <Title />
      
      <S.Container>
        <S.Label>
          <h2>Resultado</h2>
          <hr />
        </S.Label>

        <S.Info>
          <img src={Capa} alt="Capa" />

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
          amet hic vitae quis possimus praesentium 
        </S.Presentation>
      </S.Container>
    </>
  );
}