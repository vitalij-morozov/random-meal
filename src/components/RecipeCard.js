import React from 'react';
import { useSelector } from 'react-redux';

function RecipeCard() {
  const { recipe } = useSelector((store) => store.recipe);
  console.log('recipe ===', recipe);
  return <div>RecipeCard</div>;
}

export default RecipeCard;
