import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}