import { combineReducers } from 'redux';
import userAuthReducer from './userAuth';
import shoppingCartReducer from './shoppingCart';

const rootReducer = combineReducers({
  userAuthReducer,
  shoppingCartReducer,
});

export default rootReducer;
