import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation, useMeQuery } from 'src/services/authApi.js';

import './LogIn.css';

const LogIn = () => {
  const [login, { isLoading, isError }] = useLoginMutation();
  const { data: meData } = useMeQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (meData && meData.email) {
      navigate('/dashboard');
    }
  }, [meData, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    try {
      await login({ email, password });
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
        <div className='form-field'>
          <label htmlFor="email">Adresse mail</label>
          <input type="email" id="email" required placeholder="example@host.com" />
        </div>
        <div className='form-field'>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" required placeholder="Mot de passe" />
        </div>
        <div className='button-container'>
          <button type="submit" className='btn-submit'>Connexion</button>
        </div>
      </form>
    </div>);
};

export default LogIn;
