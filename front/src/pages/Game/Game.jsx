import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  logo,
  diceOne,
  diceTwo,
  diceThree,
  diceFour,
  diceFive,
  diceSix,
  diceQuestion
} from 'src/images';

import styles from './Game.module.scss';
import { dice } from '../../features/functions/dice';
import { calculateResults } from '../../features/functions/results';

const winningResults = [
  "yams",
  "carre",
  "suite",
];

const Game = () => {

  const [rollsLeft, setRollsLeft] = useState(3); // 3 rolls
  const [dices, setDices] = useState([0, 0, 0, 0, 0]); // 0 = question mark
  const [results, setResults] = useState(["-", "-", "-"]); // "yams", "carre", "suite", "aucun", "-"
  const [redirectionCountdown, setRedirectionCountdown] = useState(5); // 5 seconds
  const navigateToResults = useNavigate();

  const handleRollClick = () => {

    if (!isRollsRemaining()) {
      return;
    }

    const newDiceArray = dice();
    const currentResult = calculateResults(newDiceArray);
    let newResults = [...results];
    if (currentResult.yams) {
      newResults[3 - rollsLeft] = "yams";
    } else if (currentResult.square) {
      newResults[3 - rollsLeft] = "carre";
    } else if (currentResult.bigSuite) {
      newResults[3 - rollsLeft] = "suite";
    } else {
      newResults[3 - rollsLeft] = "aucun";
    }

    setResults(newResults);
    setDices(newDiceArray);
    setRollsLeft(rollsLeft - 1);
  }

  const isRollsRemaining = () => {
    return rollsLeft > 0;
  }

  const isGameWon = () => {
    return results.some(result => winningResults.includes(result));
  }

  const isGameFinished = () => {
    return !isRollsRemaining() || isGameWon();
  }

  useEffect(() => {
    if (isGameWon()) {
      const interval = setInterval(() => {
        setRedirectionCountdown(redirectionCountdown - 1);
        if (redirectionCountdown === 0) {
          navigateToResults('/results');
        }
      }
      , 1000);
      return () => clearInterval(interval);
    }
  }, [results, redirectionCountdown]);

  const renderDices = () => {
    return dices.map((dice, index) => {
      let diceImage;
      switch (dice) {
        case 1:
          diceImage = diceOne;
          break;
        case 2:
          diceImage = diceTwo;
          break;
        case 3:
          diceImage = diceThree;
          break;
        case 4:
          diceImage = diceFour;
          break;
        case 5:
          diceImage = diceFive;
          break;
        case 6:
          diceImage = diceSix;
          break;
        default:
          diceImage = diceQuestion;
          break;
      }
      return <img key={index} src={diceImage} alt={`dice${dice}`} />;
    });
  }

  return (
    <div className={styles["game-page"]}>
      <div className={styles["game-layout"]}>
        <div className={styles["dices"]}>
          {renderDices()}
        </div>
        <div className={styles["results"]}>
          <table>
            <thead>
              <tr>
                <th>Lancer</th>
                <th>Résultat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{results[0]}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{results[1]}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{results[2]}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" disabled={isGameFinished()} onClick={handleRollClick} className={styles["roll-btn"]}>
          <img src={logo} alt="rolling dices" />
          {rollsLeft}
        </button>
      </div>
      {isGameWon() && (
        <div className={styles["win-message"]}>
          Gagné ! Vous allez être redirigé vers la page de vos gains dans {redirectionCountdown} seconde(s).
        </div>
      )}
      <div className={styles["pastries"]}>
        Images de pâtisseries
      </div>
    </div>
  );
};

export default Game;
