import {
  ADD_ITEM,
  REMOVE_ITEM,
  TOTAL_PRICE,
  UPDATE_QUANTITY,
} from '../actions/actionsType';
import {
  addtoCartFlow,
  removeFromCartFlow,
  updatePrice,
  updateQuantity,
} from './helpers/shoppingCart';

const INICIAL_STATE = JSON.parse(localStorage.getItem('cart')) || {
  cart: [],
  totalPrices: '0,00',
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

  case TOTAL_PRICE: {
    return updatePrice(state);
  }

  case UPDATE_QUANTITY: {
    const inCart = state.cart.find((item) => (item.id === action.item.id));

    return updateQuantity(state, action, inCart);
  }

  default:
    return state;
  }
};

export default shoppingCartReducer;
