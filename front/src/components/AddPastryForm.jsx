import './AddPastryForm.css';

const AddPastryForm = () => {
  return (
    <div className="add-pastry-form-container">
      <p>Veuillez remplir les informations sur la pâtisserie</p>
      <form className="add-pastry-form">
        <div className="form-field">
          <label htmlFor="pastry-title">Nom de la pâtisserie</label>
          <input type="text" id="pastry-title" />
        </div>
        <div className="form-field">
          <label htmlFor="pastry-img">Url d'image</label>
          <input type="text" id="pastry-img" />
        </div>
        <div className="form-field">
          <label htmlFor="pastry-img">Quantité</label>
          <input type="text" id="pastry-img" />
        </div>
        <div className="button-container">
          <button type="submit" className="btn-submit">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPastryForm;