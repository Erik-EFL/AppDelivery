import { combineReducers } from 'redux';
import userAuthReducer from './userAuth';

const rootReducer = combineReducers({
  userAuthReducer,
});

export default rootReducer;
