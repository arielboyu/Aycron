import {DELETE_STORE, ADD_STORE, LOGIN_USER,LOGOUT_USER} from '../types';

const initialState = {
  stores: [],
  loggedUser: {},
  users: [
    {
      id: 0,
      user: 'admin',
      password: '1234',
      isAdmin: true,
    },
    {
      id: 1,
      user: 'user',
      password: '1234',
      isAdmin: false,
    },
  ],
};

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggedUser: action.payload,
      };
      case LOGOUT_USER:
        return {
          ...state,
          loggedUser: {},
        };
    case DELETE_STORE:
      return {
        ...state,
        stores: state.stores.filter (store => store.id !== action.payload),
      };
    case ADD_STORE:
      return {
        ...state,
        stores: [
          ...state.stores,
          {
            id: action.payload.id,
            name: action.payload.name,
            city: action.payload.city,
            street: action.payload.street,
            number: action.payload.number,
            code: action.payload.code,
            position: action.payload.position,
            distance: action.payload.distance,
          },
        ],
      };
    default:
      return state;
  }
}
