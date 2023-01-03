import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import Wrapper from '../wrappers/RecipeCardWrapper';
import { toast } from 'react-toastify';
import { addUserFavorite } from '../features/userSlice';

function RecipeCard() {
  const { recipe, selectedCategory } = useSelector((store) => store.recipe);
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    if (!user) {
      toast.error('You must have an account to add favorites');
      return;
    }
    const exists = user.favorites.find((f) => f.mealId === recipe.idMeal);
    if (exists) {
      toast.error('This recipe is already in the favorites');
      return;
    }

    dispatch(
      addUserFavorite({ userId: user.secret, mealId: recipe.idMeal, category: selectedCategory, name: recipe.strMeal })
    );
    toast.success('Meal added to favorites successfully');
  };

  return (
    <Wrapper className='card'>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className='card-img' />
      <h2>{recipe.strMeal}</h2>
      <div className='buttons'>
        <button type='button' className='btn' onClick={handleAddToFavorite}>
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
