import React from 'react';
import Wrapper from '../wrappers/NavBarWrapper';
import Logo from '../../src/style/assets/meallogo.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar() {
  const { user } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <Link to='/'>
        <img src={Logo} alt='logo' className='logo' />
      </Link>

      {user ? (
        <div className='profile'></div>
      ) : (
        <Link to='/auth' type='button' className='auth-nav'>
          Login/Register
        </Link>
      )}
    </Wrapper>
  );
}

export default NavBar;
