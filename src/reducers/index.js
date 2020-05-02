import { combineReducers } from 'redux';

import userReducer from './user';
import cartReducer from './cart';
import applicationReducer from './application';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  application: applicationReducer
});
