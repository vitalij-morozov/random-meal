import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../features/recipeSlice';
import { FullRecipeCard, FullRecipeIngr } from '../components';
function SingleRecipePage() {
  const { fullRecipe, isLoading } = useSelector((store) => store.recipe);
  const { strMeal, strCategory, strArea, strSource, strYoutube } = fullRecipe;
  const dispatch = useDispatch();
  const { mealId } = useParams();

  useEffect(() => {
    dispatch(getRecipeById(mealId));
  }, [dispatch, mealId]);

  console.log('fullRecipe ===', fullRecipe);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className='page'>
      <FullRecipeCard name={strMeal} category={strCategory} area={strArea} source={strSource} video={strYoutube} />
      <FullRecipeIngr recipe={fullRecipe} />
    </div>
  );
}

export default SingleRecipePage;
