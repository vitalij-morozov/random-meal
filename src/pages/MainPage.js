import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterBlock, RecipeCard } from '../components';
import { getRecipeCategories, handleCategorySelect, getRecipesByCategory } from '../features/recipeSlice';

function MainPage() {
  const { categories, selectedCategory } = useSelector((store) => store.recipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeCategories());
  }, [dispatch]);

  const handleSelection = (e) => {
    const value = e.target.value;
    dispatch(handleCategorySelect(value));
  };
  console.log('electedCategory ===', selectedCategory);
  const handleClick = () => {
    dispatch(getRecipesByCategory(selectedCategory));
  };

  return (
    <div className='page section-center'>
      <FilterBlock categories={categories} handleSelection={handleSelection} handleClick={handleClick} />
      <RecipeCard />
    </div>
  );
}

export default MainPage;
