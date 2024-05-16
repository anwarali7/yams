import './PastryPopup.css';

const PastryPopup = () =>{
    return (<div className="modal">
      <div className="modal-content">
        <h2>Modifier pâtisserie</h2>
        <div className="form-field">
          <label htmlFor="pastry-title">Nom de la pâtisserie</label>
          <input type="text" id="pastry-title" required/>
        </div>
        <div className="form-field">
          <label htmlFor="pastry-img">Url d'image</label>
          <input type="file" id="pastry-img" accept="src/image/*"/>
        </div>
        <div className="form-field">
          <label htmlFor="pastry-quantity">Quantité</label>
          <input type="text" id="pastry-quantity" required defaultValue={1}/>
        </div>
        <button >Sauvegarder</button>
        <button >Annuler</button>
      </div>
    </div>)
}

export default PastryPopup;