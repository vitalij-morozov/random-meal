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
    const response = await fetch(`${baseURL}/rr/users/${item.userId}`, {
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

export const removeUserFavorite = createAsyncThunk('user/removeUserFavorite', async (item, thunkAPI) => {
  try {
    const response = await fetch(`${baseURL}/rr/users/${item.userId}&${item.mealId}`, {
      method: 'DELETE',
    });
    const data = response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      removeUserFromLocalStorage();
      state.user = null;
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
      toast.success(`Welcome, ${data.user?.username}`);
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
      toast.success(`Welcome Back, ${data.user?.username}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [addUserFavorite.pending]: (state) => {
      state.isLoading = true;
    },
    [addUserFavorite.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      state.isLoading = false;
      state.user = data.user;
      addUserToLocalStorage(data.user);
      toast.success(`Recipe Added to Favorites!`);
    },
    [addUserFavorite.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [removeUserFavorite.pending]: (state) => {
      state.isLoading = true;
    },
    [removeUserFavorite.fulfilled]: (state, { payload }) => {
      const { data } = payload;
      state.isLoading = false;
      state.user = data.user;
      addUserToLocalStorage(data.user);
      toast.success(`Recipe Removed From Favorites!`);
    },
    [removeUserFavorite.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
