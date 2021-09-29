import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Title } from '../../components/Title';
import * as S from './styles';

import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';
import Image4 from '../../assets/image4.jpg';
import Image5 from '../../assets/image5.jpg';


export const Home: React.FC = () => {
  return (
    <>
      <Title />

      <main>
        <S.Form>
          <input placeholder="Digite aqui a sua busca..." />
          <button type="submit">Search</button>
        </S.Form>

        <S.Label>
          <h2>Sua busca retornou</h2>
          <hr />
        </S.Label>

        <S.PreviewResult>
          <a href="#">
            <img src={Image1} alt="Capa" />

            <div>
              <h1>Titulo</h1>
              <p>Elenco Principal</p>
            </div>

            <FiArrowRight size={40} />
          </a>

        </S.PreviewResult>

        <S.PreviewResult>
          <a href="#">
            <img src={Image2} alt="Capa" />

            <div>
              <h1>Titulo</h1>
              <p>Elenco Principal</p>
            </div>

            <FiArrowRight size={40} />
          </a>
        </S.PreviewResult>

        <S.PreviewResult>
          <a href="#">
            <img src={Image3} alt="Capa" />

            <div>
              <h1>Titulo</h1>
              <p>Elenco Principal</p>
            </div>

            <FiArrowRight size={40} />
          </a>
        </S.PreviewResult>

        <S.PreviewResult>
          <a href="#">
            <img src={Image4} alt="Capa" />

            <div>
              <h1>Titulo</h1>
              <p>Elenco Principal</p>
            </div>

            <FiArrowRight size={40} />
          </a>
        </S.PreviewResult>

        <S.PreviewResult>
          <a href="#">
            <img src={Image5} alt="Capa" />

            <div>
              <h1>Titulo</h1>
              <p>Elenco Principal</p>
            </div>

            <FiArrowRight size={40} />
          </a>
        </S.PreviewResult>
        
      </main> 
    </>
  );
}