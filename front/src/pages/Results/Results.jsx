import { useSelector } from 'react-redux';

import brioche from 'src/images/brioche.webp';
import tartelette from 'src/images/tartelette-framboise.png';
import './Results.css';

const Results = () => {
  const pastriesWon = useSelector((state) => state.pastriesWon);

  return (
    <>
      <div className="you-won-text">
        <p>Félicitations! 🥳 </p>
        <p>Vous avez gagné: </p>
      </div>
      <div className="prizes-container">
        {/* Display the pastries won 
        <div className="prize-won">
          <div className="prize-img-container">
            <img src={tartelette} className="prize-img" />
          </div>
          <div className="prize-title">Tartelette aux framboise</div>
        </div>
        <div className="prize-won">
          <div className="prize-img-container">
            <img src={brioche} className="prize-img" />
          </div>
          <div className="prize-title">Brioche sucrée avec chocolat</div>
        </div>
        <div className="prize-won">
          <div className="prize-img-container">
            <img src={brioche} className="prize-img" />
          </div>
          <div className="prize-title">Brioche sucrée avec chocolat</div>
        </div>*/}
        {pastriesWon.map((pastry, index) => (
          <div className="prize-won" key={index}>
            <div className="prize-img-container">
              <img src={pastry.image} className="prize-img" />
            </div>
            <div className="prize-title">{pastry.name}</div>
          </div>
        ))}

      </div>
    </>
  );
};

export default Results;
