import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='container'>
      <div className='spinner'></div>
      <span className='text'>Loading...</span>
    </div>
  );
};

export default Loader;
