import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export default class Books extends Component {
  state = {
    books: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/books"
      );
      let books = await response.json();
      this.setState({
        books,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        {this.state.books.map((book) => (
          <Card style={{ width: "18rem" }} key={book.asin}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.price}</Card.Text>
              <Link to={`/book-details/${book.asin}`}>
                <Button variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
