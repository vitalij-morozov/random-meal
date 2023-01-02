import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormRow from './FormRow';
import { loginUser } from '../features/userSlice';

function LoginForm({ toggle }) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameRef.current.value || !passwordRef.current.value) {
      alert('Please fill out all fields');
      return;
    }
    dispatch(loginUser({ username: usernameRef.current.value, password: passwordRef.current.value }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name} ${value}`);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <FormRow type='text' name='username' inRef={usernameRef} handleChange={handleChange} />
      <FormRow type='password' name='password' inRef={passwordRef} handleChange={handleChange} />
      <p>
        Do not registered yet?{' '}
        <button className='member-btn' onClick={toggle} type='button'>
          Register
        </button>
      </p>
      <button className='btn btn-block' disabled={isLoading} type='submit'>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
