import { REGISTER, LOGIN, TOKEN } from './actionsType';

export function setNewUser(register) {
  return { type: REGISTER, register };
}

export function userLogin(login) {
  return { type: LOGIN, login };
}

export function userToken(token) {
  return { type: TOKEN, token };
}
