import React, { Component } from "react";

export default class BookDetails extends Component {
  state = {
    book: {},
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/books/" +
          this.props.match.params.idThatWeExpect
      );
      let book = await response.json();
      console.log(book);
      this.setState({
        book,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        Book: {this.state.book.title}
        <img src={this.state.book.img} alt="" width="300" />
      </div>
    );
  }
}
