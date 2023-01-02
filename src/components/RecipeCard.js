import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Wrapper from '../wrappers/RecipeCardWrapper';

function RecipeCard() {
  const { recipe } = useSelector((store) => store.recipe);

  return (
    <Wrapper className='card'>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className='card-img' />
      <div className='buttons'>
        <Link to={`/recipes/${recipe.idMeal}`} className='card-link'>
          Learn More
        </Link>
        <button type='button' className='card-favorites'>
          Add Favorite
        </button>
      </div>
    </Wrapper>
  );
}

export default RecipeCard;
