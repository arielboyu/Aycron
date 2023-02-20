import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {logoutUser} from '../../redux/actions/index';
import store from '../../redux/store/index';

const AdminForm = ({setShowMap, captureAdress, setAuth}) => {
  const loggedUser = useSelector (state => state.loggedUser);
  const [adress, setAdress] = useState ({
    city: '',
    street: '',
    number: 0,
  });

  const handleChange = e => {
    setAdress ({
      ...adress,
      [e.target.name]: e.target.value,
    });
  };

  const submitLocation = e => {
    e.preventDefault ();
    const {street, number, city} = adress;
    if (!street || !number || !city) {
      return toast.error("please check inputs");
    }
    toast.success ('loading map ...');
    setTimeout (() => {
      captureAdress (adress);
      setShowMap (true);
    }, 2000);
  };

  const handleLogout = () => {
    toast.success (`bye ${loggedUser.user}`);
    setTimeout (() => {
      store.dispatch (logoutUser ());
      setAuth (false);
    }, 2000);
  };

  return (
    <div>
      {loggedUser && loggedUser.isAdmin
        ? <form
            style={{display: 'flex', justifyContent: 'space-around'}}
            onSubmit={submitLocation}
          >
            <input
              type="text"
              placeholder="ciudad"
              name="city"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="calle"
              name="street"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="numero"
              name="number"
              onChange={handleChange}
            />

            <button>Search</button>

          </form>
        : ''}
      <p>Welcome {loggedUser && loggedUser.user}</p>
      <button onClick={() => handleLogout ()}>Logout</button>
      <ToastContainer />
    </div>
  );
};

export default AdminForm;
