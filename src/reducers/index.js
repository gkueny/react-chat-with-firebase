import {combineReducers} from 'redux';
import generalReducer from './general.reducer';

const allReducers = combineReducers({
    general : generalReducer
});

export default allReducers;
