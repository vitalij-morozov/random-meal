import React, { useState } from 'react';
import { LoginForm, RegisterForm } from '../components';

function AuthPage() {
  const [showAuth, setShowAuth] = useState(false);

  const toggleAuth = () => {
    setShowAuth(!showAuth);
  };

  return (
    <div className='page container'>
      {showAuth ? <LoginForm toggle={toggleAuth} /> : <RegisterForm toggle={toggleAuth} />}
    </div>
  );
}

export default AuthPage;
