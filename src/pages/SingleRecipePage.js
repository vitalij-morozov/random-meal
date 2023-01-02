import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getRecipeById } from '../features/recipeSlice';
import { FullRecipeCard, FullRecipeIngr } from '../components';
function SingleRecipePage() {
  const { fullRecipe, isLoading } = useSelector((store) => store.recipe);
  const { strMeal, strCategory, strArea, strSource, strYoutube, strInstructions, strMealThumb } = fullRecipe;
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
    <div className='page single-recipe'>
      <div className='recipe-top'>
        <img src={strMealThumb} alt={strMeal} />
        <FullRecipeCard name={strMeal} category={strCategory} area={strArea} source={strSource} video={strYoutube} />
      </div>
      <p className='instructions'>{strInstructions}</p>
      <FullRecipeIngr recipe={fullRecipe} />

      <Link to='/' className='btn'>
        Go Back
      </Link>
    </div>
  );
}

export default SingleRecipePage;
