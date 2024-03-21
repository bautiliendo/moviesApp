import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../index.css';

export const Carrousel = ({ items }) => {
  const responsive = {
    xl: { breakpoint: { max: 4000, min: 3000 }, items: 8 },
    lg: { breakpoint: { max: 3000, min: 1850 }, items: 8 },
    md1: { breakpoint: { max: 1850, min: 1460 }, items: 6 },
    md2: { breakpoint: { max: 1460, min: 1250 }, items: 5 },
    md3: { breakpoint: { max: 1250, min: 1040 }, items: 4 },
    sm1: { breakpoint: { max: 1040, min: 900 }, items: 3 },
    sm2: { breakpoint: { max: 900, min: 700 }, items: 2 },
    xs1: { breakpoint: { max: 700, min: 465 }, items: 2 },
    xs2: { breakpoint: { max: 465, min: 0 }, items: 1 }
  };
  
  return (
      <Carousel 
      responsive={responsive}
      swipeable={false}
      draggable={false}
      >  
        {items.map((item, index) => (
          <div key={index}>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} className="img-style" alt={item.title}/>
            <p className='white'>
            {item.title.length <= 25 ? item.title : item.title.substring(0, 20) + '...'}</p>
            <p className='white'>{item.vote_average.toFixed(1)}</p>
          </div>
        ))}
      </Carousel>
  );
};