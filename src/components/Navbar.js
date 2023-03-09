import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h1>Bookstore CMS</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
