import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login', {
      replace: true,
    });
  };
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <NavLink className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`} to="/">
            Asociaciones
          </NavLink>
        </li>
        <li className="nav__li">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            to="/marvel"
          >
            Marvel
          </NavLink>
        </li>
        <li className="nav__li">
          <NavLink className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`} to="/dc">
            DC
          </NavLink>
        </li>
        <li className="nav__li">
          <NavLink
            className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            to="/search"
          >
            Search
          </NavLink>
        </li>
      </ul>

      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};
