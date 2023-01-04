import React from 'react';

function FormRow({ type, name, labelText, inRef }) {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input ref={inRef} type={type} name={name}  className='form-input' />
    </div>
  );
}

export default FormRow;
