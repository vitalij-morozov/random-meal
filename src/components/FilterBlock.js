import React from 'react';
import Wrapper from '../wrappers/FilterBlockWrapper';

function FilterBlock({ categories, handleSelection, handleClick }) {
  return (
    <Wrapper className='section'>
      <h2>Select Category</h2>
      <div className='form-row'>
        <select name='category' onChange={handleSelection}>
          {categories.map(({ idCategory, strCategory }) => (
            <option key={idCategory} value={strCategory}>
              {strCategory}
            </option>
          ))}
        </select>
      </div>
      <button type='button' onClick={handleClick}>
        Get Random Recipe!
      </button>
    </Wrapper>
  );
}

export default FilterBlock;
