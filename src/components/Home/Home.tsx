import { useEffect, useCallback, useState } from 'react';
import Header from '../Header/Header';
import { getMeters } from '../../services/services';
import useWindowDimensions from '../../hooks/useResponsive';
import MobileList from '../MobileList/MobileList';
import DesktopList from '../DesktopList/DesktopList';
import './Home.css';
import { MeterModel } from '../../models/models';

const Home = () => {
  const [meters, setMeters] = useState<MeterModel[]>();
  const [error, setError] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<number>(0);

  const { isMobile } = useWindowDimensions();

  const _getMeters = useCallback(async () => {
    const response = await getMeters(page);
    if (!response) {
      setError('Something went wrong');
      return;
    }
    setMeters(response?.items);
  }, [page]);

  useEffect(() => {
    _getMeters();
  }, [getMeters]);

  return (
    <div className='home-container'>
      <Header />
      {error && <span>{error}</span>}
      {isMobile && <MobileList items={meters} />}
      {!isMobile && <DesktopList items={meters} />}
    </div>
  );
};

export default Home;
