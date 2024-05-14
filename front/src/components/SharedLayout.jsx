import { Outlet, NavLink } from 'react-router-dom';
import logo from '../images/rolling-dices-svgrepo-com.svg';
import './SharedLayout.css';
import user from '../images/user.png';

const SharedLayout = () => {
  return (
    <div>
      <nav className="nav-container">
        <div className="logo">
          <img src={logo} alt="logo" width="40" height="40" />
          <h2>Yams</h2>
        </div>
        <div className="nav-bar">
          <NavLink to="/" end className="navLink">
            Accueil
          </NavLink>
          <NavLink to="/game" className="navLink">
            Jeu
          </NavLink>
          <NavLink to="/results" className="navLink">
            Résultats
          </NavLink>
        </div>
        <div className="connection">
          <img src={user} alt="user-icon" width="20" height="20" />
          <NavLink to="/login" className="navLink">
            Se connecter
          </NavLink>
        </div>
      </nav>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
