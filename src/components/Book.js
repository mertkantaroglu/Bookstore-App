import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { booksActions, deleteBook } from '../redux/books/booksSlice';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();

  const removeHandler = (event) => {
    const { id } = event.target.dataset;
    dispatch(booksActions.removeBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-list">
      <div className="book-description">
        <p id="category">{category}</p>
        <h2 id="title">{title}</h2>
        <h3 id="author">{author}</h3>
        <button className="btn" type="button">Comments  | </button>
        <button
          className="btn"
          data-id={id}
          type="button"
          onClick={removeHandler}
        >
          Remove  |
        </button>
        <button className="btn" type="button">Edit</button>
      </div>
      <div className="complete-section">
        <div className="complete-logo" />
        <div className="complete-info">
          <p id="percentage">75%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="border" />
      <div className="chapter-section">
        <h3>CURRENT CHAPTER</h3>
        <p>Chapter 22</p>
        <button type="button" id="chapter-btn">UPDATE PROGRESS</button>
      </div>
    </div>

  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
