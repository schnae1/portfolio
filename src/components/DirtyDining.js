import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../styles/dirtydining.css';
import '../styles/common.css';
import { getBaseURL, formatDate, titleCase } from '../utils.js';
import {
  Container,
  Row,
  Form,
  Card,
  CardGroup,
  Button,
  Col,
  Badge,
} from 'react-bootstrap';

export default function DirtyDining() {
  const [restaurants, setRestuarants] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  const submitHandler = (event) => {
    setPage(0);
    sendRequest();
    if (event && event.preventDefault) {
      event.preventDefault();
    }
  };

  const getNextPage = () => {
    setPage(page + 1);
    sendRequest();
  };

  const getPreviousPage = () => {
    setPage(page - 1);
    sendRequest();
  };

  const sendRequest = () => {
    axios
      .get(getBaseURL() + '/api/v1/restaurant/search', {
        params: { query, page, size: 10 },
      })
      .then((res) => {
        setRestuarants([...res?.data?.restaurants]);
        setTotalPages(res?.data?.totalPages);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getGrade = (grade) => {
    switch (grade) {
      case 'A':
        return (
          <h1 className="grade-labels">
            <Badge bg="success">A</Badge>
          </h1>
        );
      case 'B':
        return (
          <h2 className="grade-labels">
            <Badge bg="warning">B</Badge>
          </h2>
        );
      case 'C':
        return (
          <h2 className="grade-labels">
            <Badge bg="danger">C</Badge>
          </h2>
        );
      case 'P':
        return (
          <h2 className="grade-labels">
            <Badge bg="primary">P</Badge>
          </h2>
        );
      case 'X':
        return (
          <h2 className="grade-labels">
            <Badge id="closed-badge">X</Badge>
          </h2>
        );
      case 'N':
        return (
          <h2 className="grade-labels">
            <Badge bg="secondary">N</Badge>
          </h2>
        );
      case 'O':
        return (
          <h2 className="grade-labels">
            <Badge bg="info">O</Badge>
          </h2>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="containers" fluid="sm">
      <Row>
        <h1>Dirty Dining API</h1>
      </Row>

      <Row>
        <div id="line">
          <hr />
        </div>
      </Row>

      <Row>
        <p>
          The API searches a collection of restaurant inspection data from the
          Southern Nevada Health District (SNHD) with the provided input.
        </p>
        <p>
          Relevant restaurant results are returned and include the last
          restaurant inspection date, demerits and the grade.
        </p>
        <p>
          The data for this API is downloaded from the SNHD website every night
          and updated in a database.
        </p>
      </Row>

      <Form id="input-form" onSubmit={submitHandler}>
        <Row>
          <Col id="input-column" sm={8} md={8} lg={8}>
            <Form.Control
              type="text"
              value={query}
              placeholder="Search for restaurant by name or address."
              onChange={(event) => setQuery(event.target.value)}
            />
          </Col>
          <Col id="button-column" sm={4} md={4} lg={4}>
            <Button id="search-button" type="submit" variant="outline-light">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      {restaurants.length > 0 && (
        <Row id="legend-row">
          <h2>Legend</h2>
          <div id="grades">
            <h5 className="grade-labels">
              <Badge bg="success">A</Badge> Grade A
            </h5>
            <h5 className="grade-labels">
              <Badge bg="warning">B</Badge> Grade B
            </h5>
            <h5 className="grade-labels">
              <Badge bg="danger">C</Badge> Grade C
            </h5>
            <h5 className="grade-labels">
              <Badge bg="primary">P</Badge> Pending
            </h5>
            <h5 className="grade-labels">
              <Badge id="closed-badge">X</Badge> Closed
            </h5>
            <h5 className="grade-labels">
              <Badge bg="secondary">N</Badge> Not Approved to Open
            </h5>
            <h5 className="grade-labels">
              <Badge bg="info">O</Badge> Approve to Open
            </h5>
          </div>
        </Row>
      )}

      <CardGroup id="restaurant-card-group">
        {restaurants.map((restaurant) => (
          <Row className="restaurant-row" key={restaurant.id}>
            <Card className="restaurant-card">
              <Card.Header className="restaurant-heading">
                {getGrade(restaurant.currentGrade)}
                <div className="restaurant-title-section">
                  <Card.Title>
                    {titleCase(restaurant.restaurantName)}
                  </Card.Title>
                  <Card.Subtitle>
                    {restaurant.address}, {restaurant.cityName}, NV{' '}
                    {restaurant.zipCode}
                  </Card.Subtitle>
                </div>
              </Card.Header>
              <Card.Body className="restaurant-card-body">
                <Card.Text>
                  Last inspected on {formatDate(restaurant.dateCurrent)}
                </Card.Text>
                <Card.Text>
                  Previously inspected on {formatDate(restaurant.datePrevious)}{' '}
                  {'\u2022 '} Grade {restaurant.previousGrade}
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </CardGroup>

      {totalPages > 1 && page < totalPages && (
        <Row id="nav-row">
          {page > 0 && (
            <Button
              className="nav-button"
              onClick={getPreviousPage}
              variant="outline-light"
            >
              Previous
            </Button>
          )}
          {page < totalPages && (
            <Button
              className="nav-button"
              onClick={getNextPage}
              variant="outline-light"
            >
              Next
            </Button>
          )}
        </Row>
      )}
    </Container>
  );
}
