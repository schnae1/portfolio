import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}