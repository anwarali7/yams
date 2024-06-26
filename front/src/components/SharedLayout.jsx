import { useEffect, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/rolling-dices-svgrepo-com.svg';
import { useMeQuery, useLogoutMutation } from 'src/services/authApi.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from 'src/features/login/loginSlice.jsx';

import './SharedLayout.css';
import { user, exit } from 'src/images';

const SharedLayout = () => {
  const { data: meData, refetch: meRefetch } = useMeQuery();
  const [logoutMutation] = useLogoutMutation();
  const loginData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutMutation();
      // logout from store
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    meRefetch();
  }, [loginData, meRefetch]);

  useEffect(() => {
    if (meData && meData.id && !loginData.loggedIn) {
      dispatch(login(meData));
    }
  }, [meData]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="nav-container">
        <div className="logo">
          <a href="/"><img src={logo} alt="logo" width="40" height="40" />
            <h2>Yams</h2></a>
        </div>
        <div className={`nav-bar ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}>
          <NavLink to="/" end className="navLink">
            Accueil
          </NavLink>
          <NavLink to="/game" className="navLink">
            Jeu
          </NavLink>
          <NavLink to="/results" className="navLink">
            Résultats
          </NavLink>
          {loginData && loginData.loggedIn && (
            <NavLink to="/dashboard" className="navLink">
              Tableau de bord
            </NavLink>
          )}
        </div>
        <div className="connection">
          <img src={user} alt="user-icon" width="20" height="20" />
          {loginData && loginData.loggedIn ? (
            <div className="user-info">
              <p>{meData?.email}</p>
              <button type="button" onClick={handleLogout} title="Se déconnecter">
                <img src={exit} alt="exit-icon" width="20px" height="20px" />
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="navLink">
              Se connecter
            </NavLink>
          )}
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      <div className="main-content">
        <Outlet />
      </div>

      <footer className="footer">
        <p>Cette application a été développée par une équipe incroyable composée d'<a href="https://github.com/anwarali7">Ali 🧑🏻‍💻</a> et <a href="https://github.com/MarinaSigida">Marina 👩🏻‍💻</a>.</p>
      </footer>
    </div>
  );
};

export default SharedLayout;
