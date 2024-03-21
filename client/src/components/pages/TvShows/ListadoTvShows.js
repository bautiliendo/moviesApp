import React, { useState, useEffect } from 'react';
import '../../../index.css';


export const ListadoTvShows = () => {

  const [tvShows, setTvShows] = useState([]);
  const [opcion, setOpcion] = useState('trending')

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTY3Zjg2NzAzNjZkNjc5MGZkYTMyYjBlMGNmYzNlZCIsInN1YiI6IjY0YzlhYjE3ODViMTA1MDBlMjUyZWM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pP_3aWQoJV0W2k1y6ZMYAlVx-hdMXeNl1erJdUeVBpw'
    }
  };

  useEffect(() => {
    if (opcion === 'trending') {
      mostrarTvShowsTrending();
    } else if (opcion === 'nowPlaying') {
      mostrarTvShowsNowPlaying();
    } else if (opcion === 'topRated') {
      mostrarTvShowsTopRated();
    }
  }, [opcion]);

  const mostrarTvShowsTrending = () => {
    fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
    .then(response => response.json())
    .then(data => setTvShows(data.results))
    .catch(err => console.error(err));
  }

  const mostrarTvShowsNowPlaying = () => {
    fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => setTvShows(data.results))
    .catch(err => console.error(err));
  }

  const mostrarTvShowsTopRated = () => {
    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => setTvShows(data.results))
    .catch(err => console.error(err));
  }
  

  return (
    <div>
      <div className='div-listado'>
        <h1 className='white'>TV Shows</h1>
      <button onClick={() => setOpcion('trending')} className='button'>Trending </button>
      <button onClick={() => setOpcion('nowPlaying')} className='button'>Now playing</button>
      <button onClick={() => setOpcion('topRated')} className='button'>Top rated</button>
      </div>
      <div>
        <ul className='ul-style'>       
        {tvShows.slice(0, 16).map(tvshow => (
          <li key={tvshow.id}>
            <div className='img-container'>
              <img src={`https://image.tmdb.org/t/p/w300/${tvshow.poster_path}`} 
              className="img-style" 
              alt={tvshow.name} />
              <p className='white img-text'>
              {tvshow.name.length <= 25 ? tvshow.name : tvshow.name.substring(0, 25) + '...'}
              </p>
              <p className='white img-text'>
                {tvshow.vote_average.toFixed(1)}
              </p>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

