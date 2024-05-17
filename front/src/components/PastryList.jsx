import { useEffect } from 'react';
import { useState } from 'react';
import {
  useGetAllPastriesQuery,
  useGetAllPastryCountQuery,
  useAddOnePastryMutation,
  useDeletePastryByIdMutation,
  useGetPastryBySearchQuery,
} from 'src/features/pastries-api/pastriesApi.jsx';

import PastryItem from './PastryItem';
import './PastryList.css';

const PastryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, error, isLoading, refetch: refetchAllPastries } = useGetAllPastriesQuery();
  const { data: pastriesCount, refetch: refetchPastriesCount } = useGetAllPastryCountQuery();
  const {data: pastriesSearch, refetch: refetchPastriesSearch } = useGetPastryBySearchQuery(searchQuery, {
    skip: !searchQuery});

  const handlePastriesChange = () => {
    refetchAllPastries();
    refetchPastriesCount();
  }

  const handlePastriesSearchChange = (e) =>{
    setSearchQuery(e.target.value)
  }
  const handlePastriesSearch =() =>{
    if(searchQuery)
    refetchPastriesSearch();
  }

  useEffect(() => {
    refetchAllPastries();
    refetchPastriesCount();
  }, [])

  if (isLoading) {
    return <div className="message">Loading...</div>;
  }

  if (error) {
    return <div className="message">{error.message}</div>;
  }

const displayData = searchQuery && pastriesSearch ? [pastriesSearch] : data;


  if (!displayData || displayData.length === 0) {
    return <div className="message">Pas de pâtisseries disponibles</div>;
  }

  return (
    <div className="pastry-list">
      <p>Nombre de pâtisseries : {pastriesCount}</p>

      <div className="search-box-wrapper">
        <input
          type="text"
          placeholder="Rechercher des pâtisseries"
          className="search-box-input"
          value={searchQuery}
          onChange={handlePastriesSearchChange}
        />
        <button onClick={handlePastriesSearch}  className="search-box-button">&#128269;</button>
      </div>
      <div className="pastries-wrapper">
        <PastryItem data={displayData} onChange={handlePastriesChange} />
      </div>
    </div>
  );
};

export default PastryList;
