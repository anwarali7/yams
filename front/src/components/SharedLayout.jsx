import { Outlet, NavLink } from 'react-router-dom';
import logo from '../images/rolling-dices-svgrepo-com.svg';
import './SharedLayout.css';

const SharedLayout = () => {
  return (
    <div>
      <nav className="nav-container">
        <img src={logo} alt="logo" width="40" height="40" />
        <div className="nav-bar">
          <NavLink to="/" end className="navLink">
            Home
          </NavLink>
          <NavLink to="/game" className="navLink">
            Game
          </NavLink>
          <NavLink to="/results" className="navLink">
            Results
          </NavLink>
        </div>
        <NavLink to="/login" className="navLink">
          Log in
        </NavLink>
      </nav>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
