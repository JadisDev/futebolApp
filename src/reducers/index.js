import { dataUserReducer } from './dataUserReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    dataUserState: dataUserReducer,
});