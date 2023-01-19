import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';

export interface LoginInputs {
  user: string;
  password: string;
}

const Login = () => {
  const [input, setInput] = useState<LoginInputs>({ user: '', password: '' });

  return (
    <AuthLayout>
      <div>
        <form action=''>
          <input type='text' />
          <input type='password' />
          <button>Login</button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
