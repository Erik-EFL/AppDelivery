import { ADD_ITEM, REMOVE_ITEM } from '../actions/actionsType';
import { addtoCartFlow, removeFromCartFlow } from './helpers/shoppingCart';

const INICIAL_STATE = JSON.parse(localStorage.getItem('cart')) || {
  cart: [],
  totalPrices: 0,
};

const shoppingCartReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case ADD_ITEM: {
    const inCart = state.cart.find((item) => (item.id === action.item.id));

    return addtoCartFlow(state, action, inCart);
  }

  case REMOVE_ITEM: {
    return removeFromCartFlow(state, action);
  }

  default:
    return state;
  }
};

export default shoppingCartReducer;
