import { useDeletePastryByIdMutation } from 'src/features/pastries-api/pastriesApi';
import { useState } from 'react';
import { fondant } from 'src/images';
import PastryPopup from './PastryPopup';


import './PastryItem.css';

const PastryItem = ({data, onChange}) => {
const [showModal, setShowModal] = useState(false)
  const [deletePastry] = useDeletePastryByIdMutation()

  const handleEditPastry =()=>{
setShowModal(true)
  }
  
  return (
    <>
      {data.map((pastry) => (
        <div className="pastry-card" key={pastry.id}>
          {/* <img src={fondant} /> */}
          <img src={pastry.image} />
          <div>{pastry.name}</div>
          <div>Quantité: {pastry.quantity}</div>
          <div className="btn-pastry-actions">
            <button type="button" onClick={() => {
              handleEditPastry()
            }} >Modifier</button>
            <button type="button" onClick={() => {
              deletePastry(pastry.id)
              onChange()
            }}>Supprimer</button>
          </div>
        </div>
      ))}
      {showModal && <PastryPopup />}
    </>
  );
};

export default PastryItem;
