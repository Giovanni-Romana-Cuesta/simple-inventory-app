import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import LoginLogo from '../../assets/images/LoginLogo.png';
import { Link } from 'react-router-dom';
import './Login.css';

export interface LoginInputs {
  user: string;
  password: string;
}

const Login = () => {
  const [input, setInput] = useState<LoginInputs>({ user: '', password: '' });

  return (
    <AuthLayout>
      <div className='login-container'>
        <div className='text-container'>
          <img src={LoginLogo} alt='login_logo' />
          <h1>Hello Again!</h1>
          <span>Welcome to your favorite inventory manager</span>
        </div>
        <form className='login-form'>
          <div className='input-container'>
            <i className='fa-solid fa-user'></i>
            <input type='text' placeholder='Username' />
          </div>
          <div className='input-container'>
            <i className='fa-solid fa-lock'></i>
            <input type='password' placeholder='Password' />
          </div>
          <button className='login-button'>Log In</button>
        </form>
        <p>
          <span>Don&apos;t have an account? </span>
          <Link to='/register'>Sign Up here</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
