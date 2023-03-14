import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({ id: '$(Math.random() * 100)', title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form">
      <form>
        <h3>Add New Book</h3>
        <input type="text" name="title" placeholder="title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" name="author" placeholder="author" onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit" onClick={addBookHandler}>Add Book</button>
      </form>
    </div>
  );
};
export default Form;
