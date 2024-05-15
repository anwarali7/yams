import brioche from '../images/brioche.webp';
import tartelette from '../images/tartelette-framboise.png';
import './Results.css';

const Results = () => {
  return (
    <>
      <div className="you-won-text">
        <p>Félicitations! 🥳 </p>
        <p>Vous avez gagné: </p>
      </div>
      <div className="prizes-container">
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
        </div>
      </div>
    </>
  );
};

export default Results;
