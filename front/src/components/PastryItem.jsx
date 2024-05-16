import { useDeletePastryByIdMutation } from 'src/features/pastries-api/pastriesApi';
import { fondant } from 'src/images';

import './PastryItem.css';

const PastryItem = ({data, onChange}) => {

  const [deletePastry] = useDeletePastryByIdMutation()
  
  return (
    <>
      {data.map((pastry) => (
        <div className="pastry-card" key={pastry.id}>
          {/* <img src={fondant} /> */}
          <img src={pastry.image} />

          <div>{pastry.name}</div>
          <div>Quantité: {pastry.quantity}</div>
          <div className="btn-pastry-actions">
            <button>Modifier</button>
            <button type="button" onClick={() => {
              deletePastry(pastry.id)
              onChange()
            }}>Supprimer</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PastryItem;
