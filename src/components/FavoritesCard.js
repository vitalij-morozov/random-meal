import React from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../wrappers/FavoritesCardWrapper';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { removeUserFavorite } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function FavoritesCard({ mealId, name, category }) {
  const { user } = useSelector((store) => store.user);

  const nav = useNavigate();

  const dispatch = useDispatch();
  const handleRemoval = (uId, mId) => {
    dispatch(removeUserFavorite({ userId: uId, mealId: mId }));
  };

  return (
    <Wrapper className='favorite-card'>
      <h5>
        {name}, <span>{category}</span>
      </h5>

      <div className='buttons'>
        <button
          type='button'
          className='btn'
          onClick={() => {
            nav(`/recipes/${mealId}`);
          }}
        >
          <AiOutlineArrowUp /> <span>Full Recipe Page</span>
        </button>
        <button type='button' className='btn remove-btn' onClick={() => handleRemoval(user.secret, mealId)}>
          <BsTrash /> <span> Remove Favorite</span>
        </button>
      </div>
    </Wrapper>
  );
}

export default FavoritesCard;
