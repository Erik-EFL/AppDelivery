import { USER_AUTH, TOKEN } from './actionsType';

export function userAuth(user) {
  return { type: USER_AUTH, user };
}

export function userToken(token) {
  return { type: TOKEN, token };
}
