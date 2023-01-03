import { configureStore } from '@reduxjs/toolkit';
import recipeSlice from './features/recipeSlice';
import userSlice from './features/userSlice';

export const store = configureStore({
  reducer: {
    recipe: recipeSlice,
    user: userSlice,
  },
});
