import {
  ADD_ITEM,
  REMOVE_ITEM,
  TOKEN,
  TOTAL_PRICE,
  UPDATE_QUANTITY,
  USER_AUTH,
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

export function updateQuantity(item) {
  return { type: UPDATE_QUANTITY, item };
}
