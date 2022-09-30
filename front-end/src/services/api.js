import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const user = JSON.parse(localStorage.getItem('user'));
const headers = {
  'Content-Type': 'application/json',
  Authorization: user.token,
};
const registerUserByAdm = (data) => axios
  .post(`${baseUrl}/admin/manage`, data, { headers });

const getAllUsersByAdm = () => axios.get(`${baseUrl}/admin/manage`, { headers });

const requestLogin = (data) => axios.post(`${baseUrl}/login`, data);

const registerUser = (data) => axios.post(`${baseUrl}/register`, data);

const getAllProducts = () => axios.get(`${baseUrl}/products`);

export {
  requestLogin,
  registerUser,
  getAllProducts,
  registerUserByAdm,
  getAllUsersByAdm,
};
