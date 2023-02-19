import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/dirtydining.css';
import '../styles/common.css';
import { getBaseURL } from '../utils.js';
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
  const [size, setSize] = useState('');
  const [totalPages, setTotalPages] = useState('');
  const [totalResults, setTotalResults] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [inputSize, setInputSize] = useState(10);
  const [previousButtonActive, setPreviousButtonActive] = useState(false);
  const [nextButtonActive, setNextButtonActive] = useState(false);

  useEffect(() => {
    // console.log('Changed Restaurants: ', restaurants);
    // console.log('Changed Size: ', size);
    // console.log('Changed Total Pages: ', totalPages);
    // console.log('Changed Total Results: ', totalResults);
    console.log('Current Page: ', page);
  }, [restaurants, size, totalPages, totalResults, page]);

  const submitHandler = (event) => {
    console.log('Page: ' + page);
    axios
      .get(getBaseURL() + '/api/v1/restaurant/search', {
        params: { query, page, size: inputSize },
      })
      .then((res) => {
        setRestuarants([...res?.data?.restaurants]);
        setSize(res?.data?.size);
        setTotalPages(res?.data?.totalPages);
        setTotalResults(res?.data?.totalResults);
        setNextButtonActive(page < res?.data?.totalPages);
      })
      .catch((err) => {
        console.log(err.message);
      });

    if (event && event.preventDefault) {
      event.preventDefault();
    }
  };

  const getNextPage = () => {
    setPage(page + 1);
    submitHandler();
  };
  const getPreviousPage = () => {
    setPage(page - 1);
    submitHandler();
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

      <Form onSubmit={submitHandler}>
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
              <Card.Body>
                <Card.Title>{restaurant.restaurantName}</Card.Title>
                <Card.Text>Current Grade: {restaurant.currentGrade}</Card.Text>
                <Card.Text>
                  Current Grade Date: {restaurant.dateCurrent}
                </Card.Text>
                <Card.Text>
                  Previous Grade: {restaurant.previousGrade}
                </Card.Text>
                <Card.Text>
                  Previous Grade Date: {restaurant.datePrevious}
                </Card.Text>
                <Card.Text>
                  {restaurant.address}, {restaurant.cityName}, NV{' '}
                  {restaurant.zipCode}
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </CardGroup>

      {totalPages > 1 && page < totalPages && (
        <Row>
          {page > 0 && (
            <Button onClick={getPreviousPage} variant="outline-light">
              Previous
            </Button>
          )}
          {page < totalPages && (
            <Button onClick={getNextPage} variant="outline-light">
              Next
            </Button>
          )}
        </Row>
      )}
    </Container>
  );
}
