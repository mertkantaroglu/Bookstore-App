import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => (
  <div className="navbar">
    <nav>
      <ul>
        <h1>Bookstore CMS</h1>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div className="user-logo"><FaUserCircle /></div>
    </nav>
  </div>
);

export default Navbar;
