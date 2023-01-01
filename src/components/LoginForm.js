import React, { useState } from 'react';
import FormRow from './FormRow';

function LoginForm({ toggle }) {
  const initState = {
    username: '',
    password: '',
  };

  const [values, setValues] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ [name]: value });
    console.log(`${name} ${value}`);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <FormRow type='text' name='username' value={values.username} handleChange={handleChange} />
      <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />
      <p>
        Do not registered yet?{' '}
        <button className='member-btn' onClick={toggle} type='button'>
          Register
        </button>
      </p>
      <button className='btn btn-block' disabled='' type='submit'>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
