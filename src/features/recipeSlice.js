import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiURL } from '../utils/fetch';

const initialState = {
  isLoading: false,
  categories: [],
  selectedCategory: `Beef`,
  recipe: {},
};

export const getRecipeCategories = createAsyncThunk('recipes/getRecipeCategories', async (thunkAPI) => {
  try {
    const response = await fetch(`${apiURL}/categories.php`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error ===', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getRecipesByCategory = createAsyncThunk('recipes/getRecipesByCategory', async (cat, thunkAPI) => {
  try {
    const response = await fetch(`${apiURL}/filter.php?c=${cat}`);
    console.log('response ===', response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error ===', error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    handleCategorySelect: (state, { payload }) => {
      console.log(' payload ===', payload);
      state.selectedCategory = payload;
    },
  },
  extraReducers: {
    [getRecipeCategories.pending]: (state) => {
      console.log('state ===', state);
      state.isLoading = true;
    },
    [getRecipeCategories.fulfilled]: (state, { payload }) => {
      console.log('payload ===', payload);
      state.isLoading = false;
      state.categories = payload.categories;
    },
    [getRecipeCategories.rejected]: (state, { error }) => {
      state.isLoading = false;
      console.warn(error);
    },
    [getRecipesByCategory.pending]: (state) => {
      console.log('state 2===', state);
      state.isLoading = true;
    },
    [getRecipesByCategory.fulfilled]: (state, { payload }) => {
      console.log('payload 2 ===', payload);
      state.isLoading = false;
      const random = Math.floor(Math.random() * payload.meals.length);
      state.recipe = payload.meals[random];
    },
    [getRecipesByCategory.rejected]: (state, { error }) => {
      state.isLoading = false;
      console.warn(error);
    },
  },
});
export const { handleCategorySelect } = recipeSlice.actions;
export default recipeSlice.reducer;
