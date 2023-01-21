import React, { useEffect, useCallback, useState } from 'react';
import Header from '../Header/Header';
import { getMeters } from '../../services/services';
import useWindowDimensions from '../../hooks/useResponsive';
import MobileList from '../MobileList/MobileList';
import DesktopList from '../DesktopList/DesktopList';
import './Home.css';
import { MeterModel } from '../../models/models';
import CreateMeter from '../CreateMeter/CreateMeter';
import Pagination from '../Pagination/Pagination';

const Home = () => {
  const [meters, setMeters] = useState<MeterModel[]>();
  const [filteredMeters, setFilteredMeters] = useState<MeterModel[]>();
  const [error, setError] = useState<string | undefined>(undefined);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [nextPage, setNextPage] = useState<boolean>(false);
  const [previousPage, setPreviousPage] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const { isMobile } = useWindowDimensions();

  const _getMeters = useCallback(
    async (page = 0) => {
      const response = await getMeters(page);
      if (!response) {
        setError('Something went wrong');
        return;
      }
      setMeters(response.items);
      setTotalPages(response.pages);
      setPage(response.page);
      setNextPage(response.next_page !== null);
      setPreviousPage(response.previous_page !== null);
    },
    [page],
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!meters) return;
    setSearchText(event.target.value);

    if (searchText !== '') {
      const filteredData = meters.filter((item) => item.serial.includes(searchText));
      setFilteredMeters(filteredData);
    } else {
      setFilteredMeters(meters);
    }
  };

  useEffect(() => {
    _getMeters();
  }, [getMeters]);

  return (
    <div className='home-container'>
      <Header />
      <div className='home-actions'>
        <div className='search-input'>
          <i className='fa-solid fa-search'></i>
          <input type='text' placeholder='Search' onChange={handleSearch} />
        </div>
        <button onClick={() => setShowAddModal(true)}>
          <i className='fas fa-plus'></i>Add Meter
        </button>
      </div>
      {error && <span>{error}</span>}
      {isMobile && (
        <MobileList
          items={searchText.length > 1 ? filteredMeters : meters}
          getMeters={_getMeters}
        />
      )}
      {!isMobile && (
        <DesktopList
          items={searchText.length > 1 ? filteredMeters : meters}
          getMeters={_getMeters}
        />
      )}
      <CreateMeter
        show={showAddModal}
        close={() => setShowAddModal(false)}
        getMeters={_getMeters}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        getMeters={_getMeters}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </div>
  );
};

export default Home;
