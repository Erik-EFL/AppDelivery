import produce from 'immer';
import { USER_AUTH } from '../actions/actionsType';

const INICIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')),
};

const userAuthReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case USER_AUTH: {
    return produce(state, (draft) => {
      draft.user = action.user;
    });
  }

  default:
    return state;
  }
};

export default userAuthReducer;
