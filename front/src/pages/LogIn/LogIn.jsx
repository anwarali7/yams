import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'src/services/authApi.jsx';
import { login } from 'src/features/login/loginSlice.jsx';
import { useDispatch, useSelector } from 'react-redux';

import './LogIn.css';

const LogIn = () => {
  const [loginMutation, { isLoading, isError }] = useLoginMutation();
  const loginData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // check if loggedin in store instead of fetching me
  useEffect(() => {
    if (loginData.loggedIn) {
      navigate('/dashboard');
    }
  }, [loginData, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    try {
      const loginData = await loginMutation({ email, password });
      // set loggedin user id in the store
      dispatch(login(loginData.data.id));
      navigate('/dashboard');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  };


  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Se connecter</h2>
        <div className="form-field">
          <label htmlFor="email">Adresse mail</label>
          <input type="email" id="email" required placeholder="example@host.com" />
        </div>
        <div className='form-field'>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" required placeholder="Mot de passe" />
        </div>
        <div className="button-container">
          <button type="submit" className="btn-submit">
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
