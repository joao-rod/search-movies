import React, { useState, FormEvent } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title } from '../../components/Title';
import * as S from './styles';  

type Movies = {
  results: [
    {
      description: string;
      id: string;
      image: string;
      title: string;
    }
  ]
}

export const Home: React.FC = () => {
  const [movie, setMovie] = useState('');
  const [titles, setTitles] = useState<Movies[]>([]);

  async function handleAddMovie(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    let name = movie;    
    if(name === "") {
      // const response = await api.get(`pt-br/API/MostPopularMovies/k_we6um83s`);
      // const result = response.data;
      // console.log(result);
      // setTitles([...titles, result])
      // setMovie('');
    } else {
      const response = await api.get<Movies>(`pt-br/API/SearchMovie/k_we6um83s/${name}`);
      const result = response.data;
      console.log(result);
      setTitles([...titles, result]);
      setMovie('');
    }
  }

  return (
    <>
      <Title />

      <main>
        <S.Form onSubmit={handleAddMovie}>
          <input 
            value={movie}
            onChange={e => setMovie(e.target.value)}
            placeholder="Digite aqui a sua busca..." 
          />
          <button 
            type="submit" 
            onClick={() => setTitles([])}
          >
            Search
          </button>
        </S.Form>

        <S.PreviewResult>

          {
            titles.map((title, i) => (
              <div key={titles[0].results[i].id}>
                <S.Label>
                  <h2>Resultado(s) da sua busca...</h2>
                  <hr />
                </S.Label>
  
                <a href="teste">
                  <img src={titles[0].results[i].image} alt={''} />
  
                  <div>
                    <h1>{titles[0].results[i].title}</h1>
                    <p>{titles[0].results[i].description.replace("aka", "")}</p>
                  </div>
  
                  <FiArrowRight size={40} />
                </a>
              </div>
            ))
          }

        </S.PreviewResult>
      </main> 
    </>
  );
}