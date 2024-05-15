import { useState } from 'react';

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

const Game = () => {

  const [rollsLeft, setRollsLeft] = useState(3);

  const handleRollClick = () => {
    let newRollsLeft = 0;
    if (rollsLeft > 0) {
      newRollsLeft = rollsLeft - 1;
    }

    setRollsLeft(newRollsLeft);
  }


  return (
    <div className={styles["game-page"]}>
      <div className={styles["game-layout"]}>
        <div className={styles["dices"]}>
          {Array.from({ length: 5 }).map((_, index) => (
            <img key={index} src={diceQuestion} alt="diceQuestion" />
          ))}
          {/* <img src={diceOne} alt="diceOne" />
          <img src={diceTwo} alt="diceTwo" />
          <img src={diceThree} alt="diceThree" />
          <img src={diceFour} alt="diceFour" />
          <img src={diceFive} alt="diceFive" /> */}
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
                <td>aucun</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Carré (+2)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" onClick={handleRollClick} className={styles["roll-btn"]}>
          <img src={logo} alt="rolling dices" />
          {rollsLeft}
        </button>
      </div>
      <div className={styles["pastries"]}>
        Images de pâtisseries
      </div>
    </div>
  );
};

export default Game;
