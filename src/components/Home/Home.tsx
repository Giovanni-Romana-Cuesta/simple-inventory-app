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
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { isMobile } = useWindowDimensions();

  const _getMeters = useCallback(
    async (page = 0) => {
      setIsLoading(true);
      try {
        const response = await getMeters(page);
        if (!response) {
          setError('Something went wrong');
          return;
        }
        setSearchText('');
        setMeters(response.items);
        setTotalPages(response.pages);
        setPage(response.page);
        setNextPage(response.next_page !== null);
        setPreviousPage(response.previous_page !== null);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
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

  const notify = () => {
    toast.success('Action complete successfully');
  };

  useEffect(() => {
    _getMeters();
  }, [getMeters]);

  return (
    <>
      <div className='home-container'>
        <Header />
        <SearchBar
          handleSearch={handleSearch}
          searchText={searchText}
          showAddModal={() => setShowAddModal(true)}
        />

        {isLoading && <Loader />}

        {!isLoading && (
          <>
            {error && <span>{error}</span>}
            {isMobile && (
              <MobileList
                items={searchText.length > 1 ? filteredMeters : meters}
                getMeters={_getMeters}
                notify={notify}
              />
            )}
            {!isMobile && (
              <DesktopList
                items={searchText.length > 1 ? filteredMeters : meters}
                getMeters={_getMeters}
                notify={notify}
              />
            )}
            <CreateMeter
              show={showAddModal}
              close={() => setShowAddModal(false)}
              getMeters={_getMeters}
              notify={notify}
            />
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              getMeters={_getMeters}
              nextPage={nextPage}
              previousPage={previousPage}
            />
          </>
        )}
      </div>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default Home;
