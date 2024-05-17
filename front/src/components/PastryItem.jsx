import { useDeletePastryByIdMutation } from 'src/features/pastries-api/pastriesApi';
import { useState } from 'react';
import { fondant } from 'src/images';
import PastryPopup from './PastryPopup';

import './PastryItem.css';

const PastryItem = ({ data, onChange }) => {
  const [showModal, setShowModal] = useState(false)
  const [deletePastry] = useDeletePastryByIdMutation()
  const [pastryToEdit, setPastryToEdit] = useState(null)

  const handleEditPastry = (pastryToEdit) => {
    setPastryToEdit(pastryToEdit)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const makeImageSrc = (imagePath) => {
    if (!imagePath.startsWith('http')) {
      return `http://localhost:3001/uploads/images/${imagePath}`
    }
    return imagePath
  }

  return (
    <>
      {data.map((pastry) => (
        <div className="pastry-card" key={pastry.id}>
          {/* <img src={fondant} /> */}
          <img src={makeImageSrc(pastry.image)} alt={pastry.name} />
          <div>{pastry.name}</div>
          <div>Quantité: {pastry.quantity}</div>
          <div className="btn-pastry-actions">
            <button type="button" onClick={() => {
              handleEditPastry(pastry)
            }} >Modifier</button>
            <button type="button" onClick={() => {
              deletePastry(pastry.id)
              onChange()
            }}>Supprimer</button>
          </div>
        </div>
      ))}
      {showModal && <PastryPopup pastry={pastryToEdit} onClose={handleCloseModal} onEdit={onChange} />}
    </>
  );
};

export default PastryItem;
