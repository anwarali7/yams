import './LogIn.css';


const LogIn = () => {
  return (  
  <div className='form-container'>
      <form className='login-form'>
        <h2>Se connecter</h2>
        <div className='form-field'>
          <label htmlFor="email">Adresse mail</label>
          <input type="email" id="email" placeholder="example@host.com" />
        </div>
        <div>
          <label htmlFor="email">Mot de passe</label>
          <input type="email" id="email" placeholder="Mot de passe" />
        </div>
<div className='button-container'>
      <button type="submit" className='btn-submit'>Connexion</button>
      </div>
      </form>
    </div>);
};

export default LogIn;
