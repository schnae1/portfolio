import React from 'react';
import '../styles/contact.css';
import '../styles/common.css';
import { Container, Row } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className="containers" fluid="sm">
      <Row>
        <h1>Contact</h1>
      </Row>
      <Row>
        <div id="line">
          <hr />
        </div>
      </Row>
    </Container>
  );
}
