import React from 'react';
import {  Link } from "react-router-dom";
import '../styles/navbar.css';

export default function NavBar() {
  return (
    <div className='navbar'>
      <li>
        <Link className='nav-link' to="/">Home</Link>
      </li>
      <li>
        <Link className='nav-link' to="/projects">Projects</Link>
      </li>
      <li>
        <Link className='nav-link' to="/contact">Contact</Link>
      </li>
    </div>
  );
}