import { DATA_USER } from '../actions/actionsTypes';

const initialState = {
    user: ''
};

export const dataUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_USER:
          return {
            ...state,
            user: action.user
          };
        default:
          return state;
      }
};