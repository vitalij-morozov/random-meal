import React from 'react';
import Wrapper from '../wrappers/IngredientsWrapper';

function FullRecipeIngr({ recipe }) {
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
  } = recipe;
  return (
    <Wrapper>
      <div className={strIngredient1 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient1}</span>
        <span className='ingr-measure'>{strMeasure1}</span>
      </div>
      <div className={strIngredient2 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient2}</span>
        <span className='ingr-measure'>{strMeasure2}</span>
      </div>
      <div className={strIngredient3 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient3}</span>
        <span className='ingr-measure'>{strMeasure3}</span>
      </div>
      <div className={strIngredient4 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient4}</span>
        <span className='ingr-measure'>{strMeasure4}</span>
      </div>
      <div className={strIngredient5 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient5}</span>
        <span className='ingr-measure'>{strMeasure5}</span>
      </div>
      <div className={strIngredient6 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient6}</span>
        <span className='ingr-measure'>{strMeasure6}</span>
      </div>
      <div className={strIngredient7 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient7}</span>
        <span className='ingr-measure'>{strMeasure7}</span>
      </div>
      <div className={strIngredient8 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient8}</span>
        <span className='ingr-measure'>{strMeasure8}</span>
      </div>
      <div className={strIngredient9 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient9}</span>
        <span className='ingr-measure'>{strMeasure9}</span>
      </div>
      <div className={strIngredient10 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient10}</span>
        <span className='ingr-measure'>{strMeasure10}</span>
      </div>
      <div className={strIngredient11 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient11}</span>
        <span className='ingr-measure'>{strMeasure11}</span>
      </div>
      <div className={strIngredient12 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient12}</span>
        <span className='ingr-measure'>{strMeasure12}</span>
      </div>
      <div className={strIngredient13 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient13}</span>
        <span className='ingr-measure'>{strMeasure13}</span>
      </div>
      <div className={strIngredient14 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient14}</span>
        <span className='ingr-measure'>{strMeasure14}</span>
      </div>
      <div className={strIngredient15 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient15}</span>
        <span className='ingr-measure'>{strMeasure15}</span>
      </div>
      <div className={strIngredient16 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient16}</span>
        <span className='ingr-measure'>{strMeasure16}</span>
      </div>
      <div className={strIngredient17 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient17}</span>
        <span className='ingr-measure'>{strMeasure17}</span>
      </div>
      <div className={strIngredient18 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient18}</span>
        <span className='ingr-measure'>{strMeasure18}</span>
      </div>
      <div className={strIngredient19 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient19}</span>
        <span className='ingr-measure'>{strMeasure19}</span>
      </div>
      <div className={strIngredient20 ? 'ingr' : 'empty'}>
        <span className='ingr-name'>{strIngredient20}</span>
        <span className='ingr-measure'>{strMeasure20}</span>
      </div>
    </Wrapper>
  );
}

export default FullRecipeIngr;
