import React, { useState } from 'react';
import '../styles/home.css';
import Typewriter from 'typewriter-effect';
import { Button, Container } from 'react-bootstrap';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  return (
    <Container className="home" fluid>
      <Container fluid="xl">
        <h1>
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
        </h1>
      </Container>
      <Button
        href="/about"
        type="button"
        className={
          showButton ? 'show-more-button btn-lg' : 'hide-more-button btn-lg'
        }
        variant="outline-light"
      >
        Learn More
      </Button>
    </Container>
  );
}
