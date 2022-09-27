/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit';
import registerUser from '../actions/userAction';

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const initialState = {
  loading: false,
  userInfo: null, // recebera o objeto do usuario
  userToken, // para armazenar o jwt JWT
  error: null,
  success: false, // para monitorar o processo de registro.
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken'); // deleta o token do localStorage apos a saída da aplicação.
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true,
      state.error = null;
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false,
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = true,
      state.error = payload;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
