import uniqid from 'uniqid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions, postBook } from '../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookHandler = (e) => {
    e.preventDefault();
    const books = {
      item_id: uniqid(),
      title,
      author,
      category: 'Science-Fiction',
    };

    dispatch(booksActions.addBook(books));
    dispatch(postBook(books));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <form>
        <hr />
        <h3>ADD NEW BOOK</h3>
        <div className="input-field">
          <input type="text" id="title-text" name="title" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
          <input type="text" id="author-text" name="author" placeholder="Book author" onChange={(e) => setAuthor(e.target.value)} required />
          <button type="submit" onClick={addBookHandler}>ADD BOOK</button>
        </div>
      </form>
    </>
  );
}

export default Form;
