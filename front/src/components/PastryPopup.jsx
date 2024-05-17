import { useEditPastryByIdMutation } from 'src/features/pastries-api/pastriesApi';
import './PastryPopup.css';
import { useState } from 'react';

const PastryPopup = ({ pastry, onClose, onEdit }) => {
  const [pastryName, setPasrtyName] = useState(pastry.name);
  const [pastryQuantity, setPasrtyQuantity] = useState(pastry.quantity);
  const [editPastryRequest] = useEditPastryByIdMutation();

  const handlePastryEdit = async () => {
    await editPastryRequest({ id: pastry.id, pastry: { name: pastryName, quantity: pastryQuantity } })
    onEdit();
    onClose();
  }

  const handleNameChange = (e) => {
    setPasrtyName(e.target.value);
  }

  const handleQuantityChange = (e) => {
    setPasrtyQuantity(e.target.value);
  }

  return (<div className="modal-overlay">
    <div className="modal-content">
      <h2>Modifier pâtisserie</h2>
      <div className="form-field">
        <label htmlFor="pastry-title">Nom de la pâtisserie</label>
        <input type="text" id="pastry-title" name="pastryName" value={pastryName} onChange={handleNameChange} />
      </div>
      <div className="form-field">
        <label htmlFor="pastry-img">Url d'image</label>
        <input type="file" id="pastry-img" accept="src/image/*" />
      </div>
      <div className="form-field">
        <label htmlFor="pastry-quantity">Quantité</label>
        <input type="text" id="pastry-quantity" name="pastryQuantity" value={pastryQuantity} onChange={handleQuantityChange} />
      </div>
      <div className='modal-content-buttons'>
        <button type="button" onClick={handlePastryEdit}>Sauvegarder</button>
        <button type="button" onClick={onClose}>Annuler</button>
      </div>

    </div>
  </div>)
}

export default PastryPopup;
