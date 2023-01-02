import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesCard from './FavoritesCard';

function UserProfile() {
  const { user } = useSelector((store) => store.user);

  return (
    <div>
      <div className='favorites'>
        <h3>Favorites</h3>
        {user?.favorites.map((item, i) => (
          <FavoritesCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
