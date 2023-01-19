import React, { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import LoginLogo from '../../assets/images/LoginLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { LoginModel, SignUpModel, StorageKeys } from '../../models/models';
import './Login.css';

const Login = () => {
  const [input, setInput] = useState<LoginModel>({ username: '', password: '' });
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setError(undefined);
    const loggedUser: SignUpModel = JSON.parse(localStorage.getItem(StorageKeys.USER) || '');
    if (!loggedUser) return;

    if (!input.username || !input.username) {
      setError('Fill all the information');
      return;
    }

    if (input.username === loggedUser.username && input.password === loggedUser.password) {
      localStorage.setItem(StorageKeys.LOGGED_IN, 'true');
      navigate('/');
    } else {
      setError('Incorrect password or email');
      return;
    }
  };

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
            <input
              type='text'
              placeholder='Username'
              name='username'
              value={input.username}
              onChange={handleChange}
            />
          </div>
          <div className='input-container'>
            <i className='fa-solid fa-lock'></i>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={input.password}
              onChange={handleChange}
            />
          </div>
          {error && <span className='error-message'>{error}</span>}
          <button className='login-button' onClick={handleLogin}>
            Log In
          </button>
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
