import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/authSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
