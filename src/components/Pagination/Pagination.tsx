import './Pagination.css';

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  previousPage: boolean;
  nextPage: boolean;
  getMeters: (page?: number) => Promise<void>;
}

const Pagination = ({
  totalPages,
  currentPage,
  getMeters,
  nextPage,
  previousPage,
}: PaginationProps) => {
  const getNext = () => {
    if (nextPage) {
      getMeters(currentPage + 1);
    }
  };

  const getPrevious = () => {
    if (previousPage) {
      getMeters(currentPage - 1);
    }
  };

  return (
    <div className='pagination-container'>
      <div>
        <button onClick={getPrevious}>
          <i className='fa-solid fa-arrow-left'></i> <span>Previous</span>
        </button>
      </div>
      <div className='pages'>
        <span>
          {currentPage + 1} of {totalPages}
        </span>
      </div>
      <div>
        <button onClick={getNext}>
          <span>Next</span> <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
