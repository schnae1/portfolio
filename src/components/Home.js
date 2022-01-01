import React, { useEffect } from 'react';
import '../styles/home.css';
import Typewriter from 'typewriter-effect';

export default function Home() {
  useEffect(() => {
    console.log("Worked...");
    // Figure out logic to start typewriter effect here??
  }, []);
  return (
    <div className='home'>
      <div className='typewriter-container'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(2500)
            .typeString("Hello,")
            .pauseFor(1500)
            .typeString(" I'm <span style=\"color: #e00555;\">Eric</span>.")
            .pauseFor(1000)
            .typeString(" I'm a software engineer.")
            .start();
          }}
        />
      </div>
    </div>
  );
}