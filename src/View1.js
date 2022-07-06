import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <li key={this.props.book.isbn.toString()}>
        ISBN {this.props.book.isbn}, {this.props.book.title} by {this.props.book.author}
      </li>
    )
  }
}

class View1 extends React.Component {
    render() {
      return (
        <div>
          <ul>
            {this.props.response.map((book) => <Book book={book} />)}
          </ul>
        </div>
      );
    }
}

export default View1;