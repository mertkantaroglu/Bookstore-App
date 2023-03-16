import './App.css';
import { Routes, Route } from 'react-router-dom';
import Books from './route/Books';
import Categories from './route/Categories';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Books />}
        />
        <Route
          path="/categories"
          element={<Categories />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
