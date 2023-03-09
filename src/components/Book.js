import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <div className="booklist">
      <h1>List of Books</h1>
      <ul>
        <li className="single-book">
          <p>{title}</p>
          <p>{author}</p>
          <button type="submit" className="remove-btn">Remove</button>
        </li>
      </ul>
    </div>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
