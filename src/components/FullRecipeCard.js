import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addUserFavorite } from '../features/userSlice';
import { toast } from 'react-toastify';
import Wrapper from '../wrappers/FullRecipeCardWrapper';

function FullRecipeCard({ id, name, category, area, source, video }) {
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    if (!user) {
      toast.error('You must have an account to add favorites');
      return;
    }
    const exists = user.favorites.find((f) => f.mealId === id);
    if (exists) {
      toast.error('This recipe is already in the favorites');
      return;
    }
    dispatch(addUserFavorite({ userId: user.secret, mealId: id, category, name }));
    toast.success('Recipe has been added to favorites');
  };

  return (
    <Wrapper>
      <h5>
        <span className='title'>Meal: </span> <br />
        <span>{name}</span>
      </h5>
      <h5 className='category'>
        <span className='title'>Category: </span> <br />
        <span>{category}</span>
      </h5>
      <h5 className='area'>
        <span className='title'>Cousine: </span> <br />
        <span>{area}</span>
      </h5>
      <a href={source} target='_blank' rel='noreferrer'>
        Recipe Source
      </a>
      {video && (
        <a href={video} target='_blank' rel='noreferrer'>
          Recipe On Youtube
        </a>
      )}
      <button type='button' className='btn' onClick={handleAddToFavorite}>
        <span> Add To Favorites</span> <MdFavoriteBorder />
      </button>
    </Wrapper>
  );
}

export default FullRecipeCard;
