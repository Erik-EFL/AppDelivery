import produce from 'immer';
import { REGISTER } from '../actions/actionsType';

const INICIAL_STATE = {
  register: {},
};

const registerReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case REGISTER: {
    return produce(state, (draft) => {
      draft.register = action.register;
    });
  }

  default:
    return state;
  }
};

export default registerReducer;
