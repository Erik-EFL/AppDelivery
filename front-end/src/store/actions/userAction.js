import { createAsyncThunk } from '@reduxjs/toolkit';

const registerUser = createAsyncThunk(
  '/register',
  async ({ fullName, email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        '/api/user/register',
        { fullName, email, password },
        config,
      );
    } catch (error) {
    // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export default registerUser;
