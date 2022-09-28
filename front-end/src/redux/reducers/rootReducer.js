import { combineReducers } from 'redux';
import registerReducer from './userRegister';
import loginReducer from './userLogin';

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
});

export default rootReducer;
