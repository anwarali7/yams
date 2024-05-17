import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPastriesWon } from 'src/features/pastriesWon/pastriesWonSlice.jsx';
import { useNavigate } from 'react-router-dom';

import { useLazyWinPastriesQuery } from 'src/features/yams-api/yamsApi.jsx';

import {
  logo,
  diceOne,
  diceTwo,
  diceThree,
  diceFour,
  diceFive,
  diceSix,
  diceQuestion,
  macarons,
  eclair,
  tartelette,
  brioche,
  fondant,
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
  const [pastriesAmountWon, setPastriesAmountWon] = useState(0); // 0 pastries to win
  const [sendWinPastriesQuery, { data, isLoading, error }] = useLazyWinPastriesQuery();
  const dispatch = useDispatch();
  const pastriesWon = useSelector((state) => state.pastriesWon);

  const handleRollClick = () => {

    if (!isRollsRemaining()) {
      return;
    }

    const newDiceArray = dice();
    const currentResult = calculateResults(newDiceArray);
    let newResults = [...results];
    let pastriesAmountWon = 0;
    if (currentResult.yams) {
      newResults[3 - rollsLeft] = "yams";
      pastriesAmountWon = 3;
    } else if (currentResult.bigSuite) {
      newResults[3 - rollsLeft] = "suite";
      pastriesAmountWon = 2;
    } else if (currentResult.square) {
      newResults[3 - rollsLeft] = "carre";
      pastriesAmountWon = 1;
    } else {
      newResults[3 - rollsLeft] = "aucun";
    }

    setPastriesAmountWon(pastriesAmountWon);
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

  // Send the query to the api when the game is won
  useEffect(() => {
    if (isGameWon() && pastriesAmountWon > 0 && !isLoading) {
      sendWinPastriesQuery(pastriesAmountWon);
    }
  }, [pastriesAmountWon]);

  // Update the pastries won in the store when the query is resolved
  useEffect(() => {
    if (data) {
      dispatch(setPastriesWon(data));
    }
  }, [data]);

  // Redirect to the results page when the game is won, pastries won are updated and the countdown is over
  useEffect(() => {
    if (isGameWon() && pastriesWon.length > 0) {
      const interval = setInterval(() => {
        setRedirectionCountdown(redirectionCountdown - 1);
        if (redirectionCountdown === 0) {
          navigateToResults('/results');
        }
      }
        , 1000);
      return () => clearInterval(interval);
    }
  }, [pastriesWon, redirectionCountdown]);

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

  const instantWin = () => {
    setResults(["yams", "yams", "yams"]);
    setDices([6, 6, 6, 6, 6]);
    setRollsLeft(0);
    setPastriesAmountWon(3);
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
          {rollsLeft} essai(s) restant(s)
        </button>
        <button type="button" onClick={instantWin} className={styles["secret-btn"]}> 🤫 Gagner instantanément!</button>
      </div>
      {isGameWon() && (
        <div className={styles["win-message"]}>
          Gagné ! Vous allez être redirigé vers la page de vos gains dans {redirectionCountdown} seconde(s).
        </div>
      )}
      <div className={styles["pastries"]}>
        <div className={styles["pastries-img-container"]}>
          <img src={macarons} alt="macarons" className={styles["pastries-img"]} />
        </div>
        <div className={styles["pastries-img-container"]}>
          <img src={eclair} alt="eclair" className={styles["pastries-img"]} />
        </div>
        <div className={styles["pastries-img-container"]}>
          <img src={tartelette} alt="tartelette" className={styles["pastries-img"]} />
        </div>
        <div className={styles["pastries-img-container"]}>
          <img src={brioche} alt="brioche" className={styles["pastries-img"]} />
        </div>
        <div className={styles["pastries-img-container"]}>
          <img src={fondant} alt="fondant" className={styles["pastries-img"]} />
        </div>
      </div>
    </div>
  );
};

export default Game;
