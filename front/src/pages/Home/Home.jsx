import './Home.css';
import {
  diceOne,
  diceTwo,
  diceThree,
  diceFour,
  diceFive,
} from 'src/images';
import eclair from 'src/images/eclair.png';
import fondant from 'src/images//fondant.png';
import tartelette from 'src/images/tartelette-framboise.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigateTo = useNavigate();
  const handleNavigateToGamePage = (e) => {
    e.preventDefault();
    navigateTo('/game');
  };

  return (
    <>
      <div className="welcome-text">
        <p>Bienvenue au jeu de Yams de la pâtisserie !</p>
        <p>
          Dans ce jeu, vous aurez l'opportunité de remporter de délicieuses
          pâtisseries en réalisant différentes combinaisons avec des dés.
        </p>
        <p>Voici comment ça fonctionne :</p>
      </div>
      <div className="three-prizes">
        <div className="one-prize">
          <div className="prize-title">Yams</div>
          <div>Cinq dés identiques</div>
          <div className="dices">
            <img src={diceFive} alt="diceFive" />
            <img src={diceFive} alt="diceFive" />
            <img src={diceFive} alt="diceFive" />
            <img src={diceFive} alt="diceFive" />
            <img src={diceFive} alt="diceFive" />
          </div>
          <div>Trois pâtisseries remportées</div>
          <div className="pastries">
            <img src={fondant} alt="fondant" width="100" height="100" />
            <img src={tartelette} alt="tartelette" width="100" height="100" />
            <img src={eclair} alt="eclair" width="100" height="100" />
          </div>
        </div>

        <div className="one-prize">
          <div className="prize-title">La grande suite</div>
          <div>Suite de cinq dés</div>
          <div className="dices">
            <img src={diceOne} alt="diceOne" />
            <img src={diceTwo} alt="diceTwo" />
            <img src={diceThree} alt="diceThree" />
            <img src={diceFour} alt="diceFour" />
            <img src={diceFive} alt="diceFive" />
          </div>
          <div>Deux pâtisseries remportées</div>
          <div className="pastries">
            <img src={tartelette} alt="tartelette" width="100" height="100" />
            <img src={eclair} alt="eclair" width="100" height="100" />
          </div>
        </div>

        <div className="one-prize">
          <div className="prize-title">Carré</div>
          <div>Quatre dés identiques</div>
          <div className="dices">
            <img src={diceFour} alt="diceFour" />
            <img src={diceFour} alt="diceFour" />
            <img src={diceFour} alt="diceFour" />
            <img src={diceFour} alt="diceFour" />
          </div>
          <div>Une pâtisserie remportée</div>
          <div className="pastries">
            <img src={tartelette} alt="tartelette" width="100" height="100" />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleNavigateToGamePage} className="btn-play">
          Jouer
        </button>
      </div>
      <div className="rules-link">
        <a href="/rules">En savoir plus sur le jeu Yams</a>
      </div>
    </>
  );
};

export default Home;
