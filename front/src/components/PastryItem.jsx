import { fondant } from 'src/images';
import './PastryItem.css';

const PastryItem = () => {
  return (
    <>
      <div className="pastry-card">
        <img src={fondant} />
        <div>Fondant supreme</div>
        <div>Quantité: 3</div>
        <div className="btn-pastry-actions">
          <button>Modifier</button>
          <button>Supprimer</button>
        </div>
      </div>
    </>
  );
};

export default PastryItem;
