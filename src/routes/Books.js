import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => (
  <>
    <ul>
      <Book title="Rich Dad Poor Dad" author="Guy Kawasaki" />
      <Book title="Shibumi" author="Christoph Grange" />
      <Book title="Code of DaVinci" author="Dan Brown" />
    </ul>
    <Form />
  </>
);

export default Books;
