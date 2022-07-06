import React from 'react';

/*
const Book = (props)=> {
  return (
    <li key={props.book.isbn}>
      ISBN {props.book.isbn}, {props.book.title} by {props.book.author}
    </li>
  )  
}
*/
const Book = ({book})=> {
  return (
    <li key={book.isbn}>
      ISBN {book.isbn}, {book.title} by {book.author}
    </li>
  )  
}

const View1 = ({response})=> {
  return (
    <div>
      <ul>
        {response.map((book) => <Book book={book} />)}
      </ul>
    </div>
  );  
}

export default View1;