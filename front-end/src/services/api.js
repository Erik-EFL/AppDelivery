import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const requestLogin = (data) => axios.post(`${baseUrl}/login`, data);

const registerUser = (data) => axios.post(`${baseUrl}/register`, data);

const getAllProducts = () => axios.get(`${baseUrl}/products`);

const orderCreate = (data) => axios.post(`${baseUrl}/orders`, data, {
  headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` },
});

export {
  requestLogin,
  registerUser,
  getAllProducts,
  orderCreate,
};
