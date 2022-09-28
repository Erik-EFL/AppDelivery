import produce from 'immer';
import { TOKEN } from '../actions/actionsType';

const INICIAL_STATE = {
  token: '',
};

const tokenReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case TOKEN: {
    return produce(state, (draft) => {
      draft.token = action.token;
    });
  }

  default:
    return state;
  }
};

export default tokenReducer;
