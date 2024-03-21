import React, { useState, useEffect } from 'react';
import '../../../index.css';
import { Carrousel } from '../../common/Carrousel';
import imagen from '../../../imgs/dune_part_two_ver21_xxlg.jpg'


export const Listado = () => {
  const [peliculas, setPeliculas] = useState([]); // Estado para almacenar las películas
  const [opcion, setOpcion] = useState('hoy'); // Estado para almacenar la opción seleccionada

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTY3Zjg2NzAzNjZkNjc5MGZkYTMyYjBlMGNmYzNlZCIsInN1YiI6IjY0YzlhYjE3ODViMTA1MDBlMjUyZWM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pP_3aWQoJV0W2k1y6ZMYAlVx-hdMXeNl1erJdUeVBpw'
    }
  }; 
  
  useEffect(() => {
    if (opcion === 'hoy') {
      mostrarPeliculasHoy();
    } else if (opcion === 'semana') {
      mostrarPeliculasSemana();
    }
  }, [opcion]);

  const mostrarPeliculasHoy = () => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(data => setPeliculas(data.results))
      .catch(err => console.error(err));
  };

  const mostrarPeliculasSemana = () => {
    fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
      .then(response => response.json())
      .then(data => setPeliculas(data.results))
      .catch(err => console.error(err));
  };

  return (
    <div className='home-listado'> 
     <img src={imagen} alt="" className='dune'/>
      <div className='div-carrousel'>
      <div className='titles-buttons'>
        <h1 className='white h1-text reveal'>Discover countless movies, TV shows, and make your own watchlist. Start exploring now!</h1>
        <h2 className='white reveal'>Trending</h2>
          <button onClick={() => setOpcion('hoy')} className='button reveal'>Today </button>
          <button onClick={() => setOpcion('semana')} className='button reveal'>This week</button> 
      </div>
      <div className='reveal'>
      <Carrousel items={peliculas.slice(0, 15)} /> 
      </div>
      </div>
    </div>
  );
};