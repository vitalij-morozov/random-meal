import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/userSlice';
import FormRow from './FormRow';

function RegisterForm({ toggle }) {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((store) => store.user);

  const usernameRef = useRef();
  const passOneRef = useRef();
  const passTwoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usernameRef.current.value || !passOneRef.current.value || !passTwoRef.current.value) {
      alert('Please fill out fields');
      return;
    }
    dispatch(
      registerUser({
        username: usernameRef.current.value,
        password1: passOneRef.current.value,
        password2: passTwoRef.current.value,
      })
    );
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Register</h2>
      <FormRow type='text' name='username' inRef={usernameRef} />
      <FormRow type='password' name='password1' labelText='password' inRef={passOneRef} />
      <FormRow type='password' name='password2' labelText='repeat password' inRef={passTwoRef} />
      <p>
        Already have an account?
        <button className='member-btn' onClick={toggle} type='button'>
          Log In
        </button>
      </p>
      <button className='btn btn-block' disabled={isLoading} type='submit'>
        {isLoading ? 'Loading...' : 'Register'}
      </button>
    </form>
  );
}

export default RegisterForm;
