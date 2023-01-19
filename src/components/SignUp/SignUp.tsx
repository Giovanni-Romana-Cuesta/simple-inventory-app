import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';
import { SignUpModel, StorageKeys } from '../../models/models';

const SignUp = () => {
  const [newUser, setNewUser] = useState<SignUpModel>({
    name: '',
    username: '',
    password: '',
  });

  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  // To store value in localstorage
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setError(undefined);
    if (!newUser.name || !newUser.password || !newUser.username) {
      setError('Fill all the information');
      return;
    }
    localStorage.setItem(StorageKeys.USER, JSON.stringify(newUser));
  };

  return (
    <AuthLayout>
      <div className='login-container'>
        <div className='text-container'>
          <h1>Create account</h1>
        </div>
        <form className='login-form'>
          <div className='input-container'>
            <i className='fa-solid fa-signature'></i>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={newUser.name}
              onChange={handleChange}
            />
          </div>
          <div className='input-container'>
            <i className='fa-solid fa-user'></i>
            <input
              type='text'
              placeholder='Username'
              name='username'
              value={newUser.username}
              onChange={handleChange}
            />
          </div>
          <div className='input-container'>
            <i className='fa-solid fa-lock'></i>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={newUser.password}
              onChange={handleChange}
            />
          </div>
          {error && <span className='error-message'>{error}</span>}
          <button className='login-button' onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
        <p>
          <span>Have already an account? </span>
          <Link to='/login'>Login here</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
