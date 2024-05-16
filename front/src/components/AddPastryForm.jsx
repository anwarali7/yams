import { useAddOnePastryMutation } from '../features/pastries-api/pastriesApi';
import './AddPastryForm.css';

const AddPastryForm = ({onPastryAdd}) => {

  const [addPastry] = useAddOnePastryMutation();

  const handleAddPastry = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const image = e.target[1].value;
    const quantity = e.target[2].value;
    addPastry({name, image, quantity});
    onPastryAdd();
  };
  
  return (
    <div className="add-pastry-form-container">
      <p>Veuillez remplir les informations sur la pâtisserie</p>
      <form className="add-pastry-form" onSubmit={handleAddPastry}>
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
        <div className="button-container">
          <button type="submit" className="btn-submit">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

// to test - add pastry image
// https://eatside.fr/wp-content/uploads/2020/05/fondant.png


export default AddPastryForm;