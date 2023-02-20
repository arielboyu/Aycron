import React, {useState} from 'react';
import './storeForm.css';
import { addNewStore } from '../../redux/actions/index';
import {useSelector} from 'react-redux';
import store from '../../redux/store/index';
import Geocode from 'react-geocode';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


Geocode.setApiKey('AIzaSyARa8bl_UNaChrB0ofxXJ6IC2xflGNl638');
Geocode.setRegion('es');
Geocode.setLocationType('ROOFTOP');
Geocode.enableDebug();

const StoreForm = ({setSwowAddForm}) => {
  const stores = useSelector (state => state.stores);

let id = stores.length ? stores.length : 0
  const [newStore, setNewStore] = useState({
    id:id,
    name: '',
    city: '',
    street: '',
    number: 0,
    stable: true,
    position: {},
  });

  const handleChange = async e => {
    setNewStore({
      ...newStore,
      [e.target.name]: e.target.value,
    });
  };

  const getPosition = () => {
    const {city, street, number} = newStore;
    Geocode.fromAddress(city + ' ' + street + ' ' + number).then(
      response => {
        const location = response.results[0].geometry.location;
        toast.success("store created")
        setTimeout (() => {
          store.dispatch(addNewStore(newStore, location));
          setSwowAddForm(false);
        }, 2000);
      },
      error => {
        console.error(error);
        toast.error("adress not found, try again please")
      }
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const {name, city, street, number} = newStore;
    if (!name || !city || !street || !number) {
      return toast.error("please check inputs");
    }
    getPosition();
  };

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Name"
        ></input>
        <input
          type="text"
          onChange={handleChange}
          name="city"
          placeholder="city"
        ></input>
        <input
          type="text"
          onChange={handleChange}
          name="street"
          placeholder="street"
        ></input>
        <input
          type="number"
          onChange={handleChange}
          name="number"
          placeholder="number"
        ></input>
        <button>Add</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default StoreForm;
