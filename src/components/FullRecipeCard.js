import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addUserFavorite } from '../features/userSlice';
import Wrapper from '../wrappers/FullRecipeCardWrapper';

function FullRecipeCard({ id, name, category, area, source, video }) {
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    const exists = user.favorites.find((f) => f.mealId === id);
    console.log('exists ===', exists);
    if (exists) {
      alert('This recipe is already in the favorites');
      return;
    }
    dispatch(addUserFavorite({ userId: user.secret, mealId: id, category, name }));
  };

  return (
    <Wrapper>
      <h4>
        Meal: <span>{name}</span>
      </h4>
      <h5 className='category'>
        Category: <span>{category}</span>
      </h5>
      <p className='area'>
        Cousine: <span>{area}</span>
      </p>
      <a href={source} target='_blank' rel='noreferrer'>
        Recipe Source
      </a>
      {video && (
        <a href={video} target='_blank' rel='noreferrer'>
          Recipe On Youtube
        </a>
      )}
      <button type='button' className='btn' onClick={handleAddToFavorite}>
        Add Favorite <MdFavoriteBorder />
      </button>
    </Wrapper>
  );
}

export default FullRecipeCard;
