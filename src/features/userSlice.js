import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../utils/fetch';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../utils/localStorage';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
  try {
    const response = await fetch(`${baseURL}/rr/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = response.json();

    return data;
  } catch (error) {
    console.log('error ===', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
  try {
    const response = await fetch(`${baseURL}/rr/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = response.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addUserFavorite = createAsyncThunk('user/addUserFavorite', async (item, thunkAPI) => {
  try {
    const response = await fetch(`${baseURL}/tp/user/${initialState.user.secret}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    const data = response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const removeUserFavorite = createAsyncThunk('user/removeUserFavorite', async (item, thunkAPI) => {});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      removeUserFromLocalStorage();
      state.user = null;
      console.log('state.user ===', state);
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      state.isLoading = false;
      state.user = data.user;
      addUserToLocalStorage(data.user);
      toast.success(`Welcome, ${data.user?.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      state.isLoading = false;
      state.user = data.user;
      addUserToLocalStorage(data.user);
      toast.success(`Welcome Back, ${data.user?.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;