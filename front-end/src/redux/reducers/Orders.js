import produce from 'immer';
import {
  NEW_ORDER,
} from '../actions/actionsType';

const INITIAL_STATE = {
  order: {},
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_ORDER: {
    return produce(state, (draft) => {
      draft.order = action.order;
    });
  }
  default:
    return state;
  }
};

export default orderReducer;
