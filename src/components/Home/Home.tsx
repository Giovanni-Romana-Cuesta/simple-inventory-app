import { useEffect } from 'react';
import Header from '../Header/Header';
import './Home.css';
import { getMeters } from '../../services/services';

const Home = () => {
  useEffect(() => {
    getMeters()
  }, [])
  
  return (
    <div className='home-container'>
      <Header />
    </div>
  );
};

export default Home;
