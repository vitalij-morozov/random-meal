import React from 'react';
import Wrapper from '../wrappers/FilterBlockWrapper';

function FilterBlock() {
  return (
    <Wrapper className='section'>
      <div className='form-row'>
        <select name='category'>
          <option value='asd'>vagetarian</option>
        </select>
      </div>
      <button type='button'>Get Random Recipe!</button>
    </Wrapper>
  );
}

export default FilterBlock;
