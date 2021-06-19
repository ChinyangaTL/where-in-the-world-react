import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import { FaSearch } from 'react-icons/fa';
const SearchInput = () => {
  const { setSearchKey } = useGlobalContext();
  const searchTerm = React.useRef('');

  useEffect(() => {
    searchTerm.current.focus();
  }, []);

  return (
    <>
      <div className="form-control">
        <input
          type="text"
          className="filter--search"
          id="filter--search"
          ref={searchTerm}
          onChange={(e) => {
            setSearchKey(e.target.value);
            if (e.target.value === '') {
              setSearchKey('a');
            }
          }}
        />
        <FaSearch className="filter--search__icon" />
      </div>
    </>
  );
};

export default SearchInput;
