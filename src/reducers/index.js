import { combineReducers } from 'redux';
import auth from './auth.js';
import product from './product';

export default combineReducers({
   auth,
   product
})