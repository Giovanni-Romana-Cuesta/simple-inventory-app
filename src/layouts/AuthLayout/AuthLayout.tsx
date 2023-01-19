import React from 'react';
import './AuthLayout.css';
import LoginImage from '../../assets/images/login.jpg';

export interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='main-container'>
      <div className='login-image'>
        <img src={LoginImage} alt='login_image' />
      </div>
      <div className='children-container'>{children}</div>
    </div>
  );
};

export default AuthLayout;
