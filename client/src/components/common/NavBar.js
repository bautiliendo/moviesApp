import React from 'react'
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import '../../index.css';

export const NavBar = () => {
  return (
      <div className='nav'>
        <ul>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/movies">Movies</Link></li> 
        <li><Link to="/tvshows">TV Shows</Link></li> 
        <li><Link to="/login"><CiUser/></Link></li>
        </ul>         
      </div>
  )
}
