import {
  ADD_ITEM,
  REMOVE_ITEM,
  TOKEN,
  TOTAL_PRICE,
  UPDATE_QUANTITY,
  USER_AUTH,
  UPDATE_ITEM_PRICES,
} from './actionsType';

export function userAuth(user) {
  return { type: USER_AUTH, user };
}

export function userToken(token) {
  return { type: TOKEN, token };
}

export function addItem(item) {
  return { type: ADD_ITEM, item };
}

export function removeItem(item) {
  return { type: REMOVE_ITEM, item };
}

export function updatePrice() {
  return { type: TOTAL_PRICE };
}

export function updateUnitPrice() {
  return { type: UPDATE_ITEM_PRICES };
}

export function updateQuantity(item) {
  return { type: UPDATE_QUANTITY, item };
}
