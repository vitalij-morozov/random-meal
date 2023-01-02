import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import Wrapper from '../wrappers/RecipeCardWrapper';

function RecipeCard() {
  const { recipe } = useSelector((store) => store.recipe);

  return (
    <Wrapper className='card'>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className='card-img' />
      <h2>{recipe.strMeal}</h2>
      <div className='buttons'>
        <button type='button' className='btn'>
          Add Favorite <MdFavoriteBorder />
        </button>
        <Link to={`/recipes/${recipe.idMeal}`} className='card-link'>
          Full Recipe
        </Link>
      </div>
    </Wrapper>
  );
}

export default RecipeCard;
