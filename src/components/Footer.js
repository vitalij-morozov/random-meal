import React from 'react';
import Wrapper from '../wrappers/FooterWrapper';
function Footer() {
  return (
    <Wrapper>
      <p>
        2023 - A Pet Project Created With MERN stack.{' '}
        <a href='https://www.themealdb.com/api.php' target='_blank' rel='noreferrer'>
          api - MealDb
        </a>{' '}
        <br />
        PORTFOLIO
      </p>
    </Wrapper>
  );
}

export default Footer;
