import React from 'react';
import * as S from './styles'

import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';
import Image4 from '../../assets/image4.jpg';
import Image5 from '../../assets/image5.jpg';


export const Home: React.FC = () => {
  return (
    <>
      <S.Header><S.TitleSearch>Search</S.TitleSearch><S.TitleMovies>Movies</S.TitleMovies></S.Header>

      <main>
        <S.Form>
          <S.Input type="text" placeholder="Busque aqui" />
          <S.Button>Search</S.Button>
        </S.Form>

        <S.Label>Sua busca retornou</S.Label>
        <S.Line/>

        <S.PreviewResult>
          <img src={Image1} alt="Capa" />

          <div>
            <h1>Titulo</h1>
            <p>Elenco Principal</p>
          </div>
        </S.PreviewResult>

        <S.PreviewResult>
          <img src={Image2} alt="Capa" />

          <div>
            <h1>Titulo</h1>
            <p>Elenco Principal</p>
          </div>
        </S.PreviewResult>

        <S.PreviewResult>
          <img src={Image3} alt="Capa" />

          <div>
            <h1>Titulo</h1>
            <p>Elenco Principal</p>
          </div>
        </S.PreviewResult>

        <S.PreviewResult>
          <img src={Image4} alt="Capa" />

          <div>
            <h1>Titulo</h1>
            <p>Elenco Principal</p>
          </div>
        </S.PreviewResult>

        <S.PreviewResult>
          <img src={Image5} alt="Capa" />

          <div>
            <h1>Titulo</h1>
            <p>Elenco Principal</p>
          </div>
        </S.PreviewResult>
      </main> 
    </>
  );
}