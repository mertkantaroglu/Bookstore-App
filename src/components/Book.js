import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions, deleteBook } from '../redux/books/booksSlice';

function Book({
  id, title, author,
}) {
  const dispatch = useDispatch();

  const removeHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(booksActions.removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <li className="book-list">
      <p>{title}</p>
      <p>{author}</p>
      <button
        data-id={id}
        type="button"
        onClick={removeHandler}
      >
        remove
      </button>
    </li>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
