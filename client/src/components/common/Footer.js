import React from 'react'
import '../../index.css';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";


export const Footer = () => {
  return (
    <div className="footer">
      <h3>MERN Proyect</h3>
      <ul>
        <li><SiMongodb /></li>
        <li><SiExpress /></li>
        <li><SiReact /></li>
        <li><SiNodedotjs /></li>
      </ul>
    </div>
  )
}

