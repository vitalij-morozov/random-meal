import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginForm, RegisterForm } from '../components';

function AuthPage() {
  const [showAuth, setShowAuth] = useState(false);

  const { user } = useSelector((store) => store.user);
  const nav = useNavigate();
  const toggleAuth = () => {
    setShowAuth(!showAuth);
  };

  useEffect(() => {
    if (user) {
      nav('/');
    }
  }, [user, nav]);

  return (
    <div className='page container'>
      {showAuth ? <LoginForm toggle={toggleAuth} /> : <RegisterForm toggle={toggleAuth} />}
    </div>
  );
}

export default AuthPage;
