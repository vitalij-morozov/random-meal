import React from 'react';
import Wrapper from '../wrappers/NavBarWrapper';
import Logo from '../../src/style/assets/mealLogo.png';

function NavBar() {
  return (
    <Wrapper>
      <Logo className='logo' />
    </Wrapper>
  );
}

export default NavBar;
