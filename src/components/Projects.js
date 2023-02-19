import React from 'react';
import '../styles/projects.css';
import '../styles/common.css';
import { Container, Row, Card, CardGroup, Nav } from 'react-bootstrap';
// TODO: Add images to github and reference from there ****
import picture from '../images/food.jpg';

export default function Projects() {
  return (
    <Container className="containers" fluid="sm">
      <Row>
        <h1>Projects</h1>
      </Row>

      <Row>
        <div id="line">
          <hr />
        </div>
      </Row>
      <CardGroup className="project-card-group">
        <Nav.Link className="card-nav-link" href="/projects/dirty-dining-api">
          <Card className="project-card">
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Dirty Dining API</Card.Title>
            </Card.Body>
          </Card>
        </Nav.Link>
        {/* <Nav.Link className="card-nav-link" href="/projects/dirty-dining-api">
          <Card className="project-card">
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Dirty Dining API</Card.Title>
            </Card.Body>
          </Card>
        </Nav.Link>
        <Nav.Link className="card-nav-link" href="/projects/dirty-dining-api">
          <Card className="project-card">
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Dirty Dining API</Card.Title>
            </Card.Body>
          </Card>
        </Nav.Link>
        <Nav.Link className="card-nav-link" href="/projects/dirty-dining-api">
          <Card className="project-card">
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Dirty Dining API</Card.Title>
            </Card.Body>
          </Card>
        </Nav.Link>
        <Nav.Link className="card-nav-link" href="/projects/dirty-dining-api">
          <Card className="project-card">
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Dirty Dining API</Card.Title>
            </Card.Body>
          </Card>
        </Nav.Link>
        <Nav.Link className="card-nav-link" href="/projects/dirty-dining-api">
          <Card className="project-card">
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Dirty Dining API</Card.Title>
            </Card.Body>
          </Card>
        </Nav.Link>
        <Nav.Link className="card-nav-link" href="/projects/dirty-dining-api">
          <Card className="project-card">
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Dirty Dining API</Card.Title>
            </Card.Body>
          </Card>
        </Nav.Link>
        <Nav.Link className="card-nav-link" href="/projects/dirty-dining-api">
          <Card className="project-card">
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Dirty Dining API</Card.Title>
            </Card.Body>
          </Card>
        </Nav.Link> */}
      </CardGroup>
    </Container>
  );
}
