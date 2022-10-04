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

const orderCreate = (data) => axios.post(`${baseUrl}/orders`, data, {
  headers: { Authorization: JSON.parse(localStorage.getItem('user')).token },
});

const ordersContent = (data) => axios.post(`${baseUrl}/orders`, data);

/* const orderDetails = (id) => axios.get(`${baseUrl}/orders/${id}`);

const orderUpdate = (id, data) => axios.put(`${baseUrl}/orders/${id}`, data, {
  headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` },
});

const orderDelete = (id) => axios.delete(`${baseUrl}/orders/${id}`, {
  headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` },
}); */

export {
  requestLogin,
  registerUser,
  getAllProducts,
  registerUserByAdm,
  getAllUsersByAdm,
  orderCreate,
  ordersContent,
};
