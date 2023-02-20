export const addNewStore = (newStore,location) => async (dispatch) => {
  let randCode = (1000 + Math.random() * 9000).toFixed(0);
  const {name,city,street,number,id,stable,distance } = newStore
  try {
    dispatch({
      type: "ADD_STORE",
      payload: {
        id:id,
        code:randCode,
        name:name,
        city:city,
        street:street,
        number:number,
        stable:stable,
        position:location,
        distance:distance
      },
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};

export const deleteStore = (storeID) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_STORE",
      payload: storeID,
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};


export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_USER",
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_USER"
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};