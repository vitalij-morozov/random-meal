import React from 'react';
import Wrapper from '../wrappers/NavBarWrapper';
import Logo from '../../src/style/assets/meallogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/userSlice';

function NavBar() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const nav = useNavigate();
  console.log('user ===', user);

  return (
    <Wrapper>
      <Link to='/'>
        <img src={Logo} alt='logo' className='logo' />
      </Link>

      {user ? (
        <div className='user'>
          <Link to='/profile'>
            <div className='profile'></div>
          </Link>

          <button
            type='button'
            className='btn logout'
            onClick={() => {
              dispatch(logoutUser());
              nav('/auth');
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <Link to='/auth' type='button' className='auth-nav'>
          Login/Register
        </Link>
      )}
    </Wrapper>
  );
}

export default NavBar;
