import { useNavigate } from 'react-router-dom';
import { exclamationPoint } from 'src/images';
import './Rules.css';

const Rules = () => {
  const navigateTo = useNavigate();
  const handleNavigateToGamePage = (e) => {
    e.preventDefault();
    navigateTo('/');
  };

  return (<>
    <div className="welcome-text">
      <p>Bienvenue au jeu de Yams de la pâtisserie !</p>
      <p>
        Dans ce jeu, vous aurez l'opportunité de remporter de délicieuses
        pâtisseries en réalisant différentes combinaisons avec des dés.
      </p>
      <p>Voici comment ça fonctionne :</p>
    </div>
    <div className="rules-list">
      <div className="rules-list-box">
        <p>Les combinaisons gagnantes :</p>
        <ol>
          <li>Yams 🎲 : Cinq dés identiques, trois pâtisseries remportées.</li>
          <li>La grande suite 🎲 : Suite de cinq dés (1-2-3-4-5 ou 2-3-4-5-6), deux pâtisseries sélectionnées aléatoirement.</li>
          <li>Le carré 🎲 : Quatre dés identiques, une pâtisserie gagnée.</li>
        </ol>


      </div>
      <div className="rules-list-box">
        <p>Déroulement du jeu :</p>
        <ol>
          <li>Vous commencez avec un lancer de cinq dés.</li>
          <li>Après le premier lancer, vous avez la possibilité de choisir quels dés garder et lesquels relancer.</li>
          <li>Vous pouvez relancer les dés jusqu'à trois fois au total.</li>
          <li>Après le troisième lancer, ou si vous décidez de ne pas relancer de dés, vous devez choisir la combinaison que vous souhaitez valider.</li>
        </ol>
      </div>

      <div className="rules-list-box">
        <div className='attention-box'>
<img src={exclamationPoint} width="80" height="80" />
        <p>Attention : Une fois qu'une combinaison est validée, elle ne peut plus être modifiée.</p>
        </div>
        
        <p>Récompenses : Selon la combinaison que vous réalisez, vous remportez un certain nombre de pâtisseries.</p>
        <p>Amusez-vous et que la chance soit avec vous pour remporter de délicieux desserts !</p>

      </div>
    </div>
    <div className="button-container">
      <button onClick={handleNavigateToGamePage} className="btn-goback">Revenir à la page d’accueil</button>
    </div>
  </>);
};

export default Rules;
