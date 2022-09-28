import produce from 'immer';
import { LOGIN } from '../actions/actionsType';

const INICIAL_STATE = {
  login: {},
};

const loginReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN: {
    return produce(state, (draft) => {
      draft.login = action.login;
    });
  }

  default:
    return state;
  }
};

export default loginReducer;
