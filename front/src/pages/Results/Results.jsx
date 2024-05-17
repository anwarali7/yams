import { useSelector } from 'react-redux';
import './Results.css';

const Results = () => {
  const pastriesWon = useSelector((state) => state.pastriesWon);

  const makeImageSrc = (imagePath) => {
    if (!imagePath.startsWith('http')) {
      return `http://localhost:3001/uploads/images/${imagePath}`
    }
    return imagePath
  }

  return (
    <>
      <div className="you-won-text">
        <p>Félicitations! 🥳 </p>
        <p>Vous avez gagné: </p>
      </div>
      <div className="prizes-container">
        {pastriesWon.map((pastry, index) => (
          <div className="prize-won" key={index}>
            <div className="prize-img-container">
              <img src={makeImageSrc(pastry.image)} className="prize-img" />
            </div>
            <div className="prize-title">{pastry.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Results;
