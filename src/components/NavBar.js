import React from 'react';
import Wrapper from '../wrappers/NavBarWrapper';
import Logo from '../../src/style/assets/meallogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/userSlice';
import { CiLogout } from 'react-icons/ci';

function NavBar() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <Wrapper>
      <Link to='/'>
        <img src={Logo} alt='logo' className='logo' />
      </Link>

      {user ? (
        <div className='user'>
          <Link to='/profile'>
            <h3 className='username'>{user?.username}</h3>
          </Link>
          <Link to='/profile'>
            <div className='profile' title='go to profile'></div>
          </Link>

          <button
            type='button'
            className='btn logout'
            onClick={() => {
              dispatch(logoutUser());
              nav('/auth');
            }}
          >
            <CiLogout /> <span> Log Out</span>
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
