import React from 'react';

import Wrapper from '../wrappers/FullRecipeCardWrapper';

function FullRecipeCard({ name, category, area, source, video }) {
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
    </Wrapper>
  );
}
<iframe
  width='1730'
  height='712'
  src='https://www.youtube.com/embed/oWzc8gZb634'
  title='This Game is $120 on Steam'
  frameborder='0'
  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  allowfullscreen
></iframe>;

export default FullRecipeCard;
