import {
  useGetAllPastriesQuery,
  useAddOnePastryMutation,
  useDeletePastryByIdMutation,
} from 'src/features/pastries-api/pastriesApi.jsx';

import PastryItem from './PastryItem';
import './PastryList.css';

const PastryList = () => {
  const { data, error, isLoading } = useGetAllPastriesQuery();

  if (isLoading) {
    return <div className="message">Loading...</div>;
  }

  if (error) {
    return <div className="message">{error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div className="message">Pas de pâtisseries disponibles</div>;
  }

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
        <PastryItem data={data} />
      </div>
    </div>
  );
};

export default PastryList;
