import React from 'react';
import {useSelector} from 'react-redux';
import store from '../../redux/store/index';
import {deleteStore} from '../../redux/actions/index';

const Table = ({setSwowAddForm, showAddForm}) => {
  const stores = useSelector (state => state.stores);
  const handleShow = () => {
    setSwowAddForm (true);
  };
  const handleHide = () => {
    setSwowAddForm (false);
  };
  const handleDelete = storeID => {
    store.dispatch (deleteStore (storeID));
  };

  const getStable = stable => {
    return stable === true ? 'yes' : 'no';
  };

  return (
    <div style={{marginTop: '100px'}}>
      {showAddForm
        ? <button onClick={() => handleHide ()}>Back</button>
        : <button onClick={() => handleShow ()}>Add New Store</button>}
      {stores
        ? <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Adress</th>
                <th scope="col">Stable</th>
              </tr>
            </thead>
            <tbody>
              {stores &&
                stores.map (store => (
                  <tr key={store.id}>
                    <td>{store.code}</td>
                    <td>{store.name}</td>
                    <td>
                      {store.city + ' ' + store.street + ' ' + store.number}
                    </td>
                    <td>{getStable (store.stable)}</td>
                    <td>
                      <button onClick={() => handleDelete (store.id)}>
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        : <p style={{marginTop: '100px'}}>waiting storess..!</p>}
    </div>
  );
};

export default Table;
