import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const requestLogin = (data) => axios.post(`${baseUrl}/login`, data);

export default requestLogin;
