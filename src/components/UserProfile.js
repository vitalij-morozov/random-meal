import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesCard from './FavoritesCard';
import Wrapper from '../wrappers/UserProfileWrapper';
import { Link } from 'react-router-dom';

function UserProfile() {
  const { user } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div className='favorites'>
        <div className='favorites-top'>
          <h3>Favorites</h3>{' '}
          <Link to='/' className='btn'>
            GO HOME
          </Link>
        </div>

        {user?.favorites.map((item, i) => (
          <FavoritesCard key={i} {...item} />
        ))}
      </div>
    </Wrapper>
  );
}

export default UserProfile;
