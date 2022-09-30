import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const requestLogin = (data) => axios.post(`${baseUrl}/login`, data);

const registerUser = (data) => axios.post(`${baseUrl}/register`, data);

const getAllProducts = () => axios.get(`${baseUrl}/products`);

const orderCreate = () => axios.post(`${baseUrl}/orders`);

export {
  requestLogin,
  registerUser,
  getAllProducts,
  orderCreate,
};
