import { DATA_USER } from '../actions/actionsTypes';

const initialState = {
    newValue: ''
};

export const dataUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_USER:
          return {
            ...state,
            newValue: action.newValue
          };
        default:
          return state;
      }
};