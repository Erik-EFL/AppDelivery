import { USER_AUTH, TOKEN, ADD_ITEM, REMOVE_ITEM } from './actionsType';

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
