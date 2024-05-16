import React, { useState } from 'react';
import PastryList from '../../components/PastryList';
import AddPastryForm from '../../components/AddPastryForm';
import './Dashboard.css';

const Dashboard = () => {
  const [showPastryList, setShowPastryList] = useState(true);

  const handleShowPastryList = () => {
    setShowPastryList(true);
  };

  const handleShowAddPastryForm = () => {
    setShowPastryList(false);
  };

  const handlePastryAdded = () => {
    setShowPastryList(true);
  }

  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard-toggle">
          <button className="btn-toggle" onClick={handleShowPastryList}>
            Liste des pâtisseries
          </button>
          <button className="btn-toggle" onClick={handleShowAddPastryForm}>
            Ajouter pâtisserie
          </button>
        </div>
        {showPastryList ? <PastryList /> : <AddPastryForm onPastryAdd={handlePastryAdded}/>}
      </div>
    </div>
  );
};

export default Dashboard;
