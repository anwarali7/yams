import { useEditPastryByIdMutation } from 'src/features/pastries-api/pastriesApi';
import './PastryPopup.css';
import { useState } from 'react';

const PastryPopup = ({ pastry, onClose, onEdit }) => {
  const [pastryName, setPastryName] = useState(pastry.name);
  const [pastryQuantity, setPastryQuantity] = useState(pastry.quantity);
  const [pastryImage, setPastryImage] = useState(pastry.quantity);
  const [editPastryRequest] = useEditPastryByIdMutation();

  const handlePastryEdit = async () => {
    await editPastryRequest({ id: pastry.id, pastry: { name: pastryName, quantity: pastryQuantity } })
    onEdit();
    onClose();
  }

  const handleNameChange = (e) => {
    setPastryName(e.target.value);
  }

   const handleImageChange = (e) => {
    setPastryImage(e.target.value);
  }

  const handleQuantityChange = (e) => {
    setPastryQuantity(e.target.value);
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
        <input type="file" id="pastry-img" accept="src/image/*" value={pastryImage} onChange={handleImageChange}/>
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
