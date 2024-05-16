import { fondant } from 'src/images';

import './PastryItem.css';

const PastryItem = (data) => {
  return (
    <>
      {data.map((pastry) => (
        <div className="pastry-card">
          <img src={fondant} />
          <div>{pastry.name}</div>
          <div>Quantité: {pastry.quantity}</div>
          <div className="btn-pastry-actions">
            <button>Modifier</button>
            <button>Supprimer</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PastryItem;
