import React, {useState} from 'react';
import Map from '../map/map';
import Table from '../table/table';
import StoreForm from '../storeForm/storeForm';
import AdminForm from '../adminForm/adminForm';

const Home = ({setAuth}) => {
  const [showMap, setShowMap] = useState(false);
  const [showAddForm, setSwowAddForm] = useState(false);
  const [adress, captureAdress] = useState(null);

  return (
    <div style={{marginTop: '100px'}}>
      <AdminForm  setAuth={setAuth} captureAdress={captureAdress} setShowMap={setShowMap} />
      <hr></hr>
      {showAddForm ? <StoreForm setSwowAddForm={setSwowAddForm} /> : ''}
      <div style={{marginLeft: '100px'}}>
        {showMap ? <Map adress={adress} /> : ''}
      </div>
      <Table setSwowAddForm={setSwowAddForm} showAddForm={showAddForm} />
    </div>
  );
};

export default Home;
