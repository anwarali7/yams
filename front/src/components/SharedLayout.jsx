import { useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/rolling-dices-svgrepo-com.svg';
import { useMeQuery, useLogoutMutation } from 'src/services/authApi.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'src/features/login/loginSlice.jsx';

import './SharedLayout.css';
import user from '../images/user.png';

const SharedLayout = () => {
  const { data: meData, refetch: meRefetch } = useMeQuery();
  const [logoutMutation] = useLogoutMutation();
  const loginData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          <NavLink to="/dashboard" className="navLink">
            Tableau de bord
          </NavLink>
        </div>
        <div className="connection">
          <img src={user} alt="user-icon" width="20" height="20" />
          {loginData && loginData.loggedIn ? (
            <div className="user-info">
              <p>{meData.email}</p>
              <button type="button" onClick={handleLogout}>
                Se déconnecter
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="navLink">
              Se connecter
            </NavLink>
          )}
        </div>
      </nav>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
