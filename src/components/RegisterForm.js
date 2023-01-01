import React, { useState } from 'react';
import FormRow from './FormRow';

function RegisterForm({ toggle }) {
  const initState = {
    username: '',
    password1: '',
    password2: '',
  };

  const [values, setValues] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ [name]: value });
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Register</h2>
      <FormRow type='text' name='username' value={values.username} handleChange={handleChange} />
      <FormRow
        type='password'
        name='password1'
        labelText='password'
        value={values.password1}
        handleChange={handleChange}
      />
      <FormRow
        type='password'
        name='password2'
        labelText='repeat password'
        value={values.password2}
        handleChange={handleChange}
      />
      <p>
        Already have an account?
        <button className='member-btn' onClick={toggle} type='button'>
          Log In
        </button>
      </p>
      <button className='btn btn-block' disabled='' type='submit'>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
