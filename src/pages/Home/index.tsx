import React, { useState, FormEvent } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';

import { Title } from '../../components/Title/index';
import api from '../../services/api';
import ImageErrorEmptyField from '../../assets/error_empty_field.png';
import * as S from './styles';  

type Movie = {
  description: string;
  id: string;
  image: string;
  title: string;
}

type Movies = {
  results: Movie[];
}

export const Home: React.FC = () => {
  const [callPreview, setCallPreview] = useState(0);
  const [movie, setMovie] = useState('');
  const [nameMovie, setNameMovie] = useState('');
  const [titles, setTitles] = useState<Movies>({} as Movies);

  async function handleAddMovie(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
   
    setNameMovie(movie);
    if(movie.trim() !== "") {
      const response = await api.get(`pt-br/API/SearchMovie/k_we6um83s/${movie}`);
      const result = response.data;
      setTitles(result);
      setCallPreview(1);
      setMovie('');
    } else {
      setCallPreview(2);
      setMovie('');
    }
  }

  return (
    <>
      <Title />

      <S.Container>
        <S.Form onSubmit={handleAddMovie}>
          <input 
            value={movie}
            onChange={e => setMovie(e.target.value)}
            placeholder="Digite aqui a sua busca..." 
          />
          <button type="submit">
            Search
          </button>
        </S.Form>

        {callPreview === 1 ? 
          <S.PreviewResult>
            <S.Label>
              <h2>Você pesquisou por: "{nameMovie.toLocaleUpperCase()}"..</h2>
              <hr />
            </S.Label>

            {
              titles?.results?.map((title) => (
                <div key={title.id}>  
                  <a href="teste">
                    <img src={title.image} alt={''} />
    
                    <div>
                      <h1>{title.title}</h1>
                      <p>{title.description.replace("aka", "")}</p>
                    </div>
    
                    <FiArrowRightCircle size={40} />
                  </a>
                </div>
              ))
            }
          </S.PreviewResult> : null
        }

        {callPreview === 2 ? 
          <S.EmptyField>
            <p>
              <img src={ImageErrorEmptyField} alt="Empty Field" />
              Você deve digitar algo no campo acima!!
            </p>
          </S.EmptyField> : null
        }
      </S.Container>
    </>
  );
}