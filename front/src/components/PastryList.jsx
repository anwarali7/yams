import PastryItem from './PastryItem';
import './PastryList.css';

const PastryList = () => {
  return (
    <div className="pastry-list">
      <p>Nombre de pâtisseries : 30</p>

      <div className="search-box-wrapper">
        <input
          type="text"
          placeholder="Rechercher des pâtisseries"
          className="search-box-input"
        />
        <button className="search-box-button">&#128269;</button>
      </div>
      <div className="pastries-wrapper">
        <PastryItem />
        <PastryItem />
        <PastryItem />
        <PastryItem />
        <PastryItem />
        <PastryItem />
        <PastryItem />
        <PastryItem />
      </div>
    </div>
  );
};

export default PastryList;
