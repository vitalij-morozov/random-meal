import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../wrappers/RecipeCardWrapper';

function RecipeCard() {
  const { recipe } = useSelector((store) => store.recipe);
  console.log('recipe ===', recipe);
  return (
    <Wrapper className='card'>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className='card-img' />
      <div className='buttons'>
        <button type='button' className='card-link'>
          Learn More
        </button>
        <button type='button' className='card-favorites'>
          Add Favorite
        </button>
      </div>
    </Wrapper>
  );
}

export default RecipeCard;
