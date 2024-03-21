import React, { useState, useEffect } from 'react';
import '../../../index.css';

export const ListadoMovies = () => {

  const [peliculas, setPeliculas] = useState([]); 
  const [opcion, setOpcion] = useState('popular'); 

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTY3Zjg2NzAzNjZkNjc5MGZkYTMyYjBlMGNmYzNlZCIsInN1YiI6IjY0YzlhYjE3ODViMTA1MDBlMjUyZWM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pP_3aWQoJV0W2k1y6ZMYAlVx-hdMXeNl1erJdUeVBpw'
    }
  };

  useEffect(() => {
    if (opcion === 'popular') {
      mostrarPeliculasPopular();
    } else if (opcion === 'nowPlaying') {
      mostrarPeliculasNowPlaying();
    } else if (opcion === 'topRated') {
      mostrarPeliculasTopRated();
    }
  }, [opcion]);
  

    const mostrarPeliculasPopular = () => {
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => setPeliculas(data.results))
        .catch(err => console.error(err));
    };

    const mostrarPeliculasNowPlaying = () => {
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => setPeliculas(data.results))
        .catch(err => console.error(err));
    };

    const mostrarPeliculasTopRated = () => {
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => setPeliculas(data.results))
        .catch(err => console.error(err));
    };


  return (
    <div>
      <div className='div-listado'>
        <h1 className='white'>Movies</h1>
      <button onClick={() => setOpcion('popular')} className='button'>Popular </button>
      <button onClick={() => setOpcion('nowPlaying')} className='button'>Now playing</button>
      <button onClick={() => setOpcion('topRated')} className='button'>Top rated</button>
      </div>
      <div>
      <ul className='ul-style'>       
        {peliculas.slice(0, 16).map(pelicula => (
          <li key={pelicula.id}>
            <div className="img-container">
            <img src={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} 
            className="img-style" 
            alt={pelicula.title} />
            <p className="white img-text">
             {pelicula.title.length <= 25 ? pelicula.title : pelicula.title.substring(0, 25) + '...'}
           </p> 
           <p className='white img-text'>
           {pelicula.vote_average.toFixed(1)}
           </p>
           </div>
          </li>
        ))}
      </ul>
      </div> 
    </div>
  )
}
