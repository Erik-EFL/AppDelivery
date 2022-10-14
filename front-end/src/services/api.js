import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const requestLogin = (data) => axios.post(`${baseUrl}/login`, data);

const registerUser = (data) => axios.post(`${baseUrl}/register`, data);

const getAllProducts = () => axios.get(`${baseUrl}/products`);

const registerUserByAdm = (data) => axios
  .post(`${baseUrl}/admin/manage`, data, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem('user')).token,
    },
  });

const getAllUsersByAdm = () => axios.get(`${baseUrl}/admin/manage`, {
  headers: { Authorization: JSON.parse(localStorage.getItem('user')).token },
});

const getUserByRole = (role) => axios.get(`${baseUrl}/user/profile/role/${role}`, {
  headers: { Authorization: JSON.parse(localStorage.getItem('user')).token },
});

const getUserById = (id) => axios.get(`${baseUrl}/user/profile/${id}`, {
  headers: { Authorization: JSON.parse(localStorage.getItem('user')).token },
});

const orderCreate = (data) => axios.post(`${baseUrl}/orders`, data, {
  headers: { Authorization: JSON.parse(localStorage.getItem('user')).token },
});

const getOrderById = (id) => axios.get(`${baseUrl}/orders/${id}`, {
  headers: { Authorization: JSON.parse(localStorage.getItem('user')).token },
});

const getAllSalesByCustomerId = () => axios.get(`${baseUrl}/customer/orders`, {
  headers: { Authorization: JSON.parse(localStorage.getItem('user')).token },
});

const updateSaleStatus = (id, data) => {
  axios
    .put(`${baseUrl}/customer/orders/${id}`, data, {
      headers: { Authorization: JSON.parse(localStorage.getItem('user')).token },
    });
};

export {
  requestLogin,
  registerUser,
  getAllProducts,
  registerUserByAdm,
  getAllUsersByAdm,
  orderCreate,
  getOrderById,
  getUserById,
  getUserByRole,
  updateSaleStatus,
  getAllSalesByCustomerId,
};
