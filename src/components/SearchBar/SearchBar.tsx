import React from 'react';

export interface SearchBarProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showAddModal: () => void;
  searchText: string;
}

const SearchBar = ({ handleSearch, showAddModal, searchText }: SearchBarProps) => {
  return (
    <div className='home-actions'>
      <div className='search-input'>
        <i className='fa-solid fa-search'></i>
        <input type='text' placeholder='Search' value={searchText} onChange={handleSearch} />
      </div>
      <button onClick={showAddModal}>
        <i className='fas fa-plus'></i>Add Meter
      </button>
    </div>
  );
};

export default SearchBar;
