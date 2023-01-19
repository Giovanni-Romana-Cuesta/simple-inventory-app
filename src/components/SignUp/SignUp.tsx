import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';

const SignUp = () => {
  return (
    <AuthLayout>
      <div className='login-container'>
        <div className='text-container'>
          <h1>Create account</h1>
        </div>
        <form className='login-form'>
          <div className='input-container'>
            <i className='fa-solid fa-signature'></i>
            <input type='text' placeholder='Name' />
          </div>
          <div className='input-container'>
            <i className='fa-solid fa-envelope'></i>
            <input type='mail' placeholder='Email' />
          </div>
          <div className='input-container'>
            <i className='fa-solid fa-user'></i>
            <input type='text' placeholder='Username' />
          </div>
          <div className='input-container'>
            <i className='fa-solid fa-lock'></i>
            <input type='password' placeholder='Password' />
          </div>
          <button className='login-button'>Sign Up</button>
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
