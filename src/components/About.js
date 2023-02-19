import React from 'react';
import '../styles/about.css';
import '../styles/common.css';
import { Container, Row } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="containers" fluid="sm">
      <Row>
        <h1>About</h1>
      </Row>
      <Row>
        <div id="line">
          <hr />
        </div>
      </Row>
    </Container>
  );
}
