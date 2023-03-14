import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="booklist">
      <h1>List of Books</h1>
      <ul>
        <li className="book-items">
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{category}</p>
          <button type="submit" className="remove-btn" onClick={() => dispatch(removeBook(id))}>Remove</button>
        </li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
