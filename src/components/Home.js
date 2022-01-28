import React, { useState } from 'react';
import '../styles/home.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="home">
      <div className="typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2500)
              .typeString('Hello,')
              .pauseFor(1500)
              .typeString(' I\'m <span style="color: #e00555;">Eric</span>.')
              .pauseFor(1000)
              .typeString(" I'm a software engineer.")
              .pauseFor(1000)
              .callFunction(() => {
                setShowButton(true);
              })
              .start();
          }}
        />
      </div>
      <Link to="/about">
        <button
          className={showButton ? 'show-more-button' : 'hide-more-button'}
          onClick={null}
        >
          Learn More
        </button>
      </Link>
    </div>
  );
}
