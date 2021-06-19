import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = '//restcountries.eu/rest/v2/name/';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchKey, setSearchKey] = useState('a');
  const [countries, setCountries] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchKey}`);
      const data = await res.json();
      console.log(data);
      setCountries(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [searchKey]);

  useEffect(() => {
    fetchData();
  }, [searchKey, fetchData]);

  return (
    <AppContext.Provider
      value={{ loading, countries, setSearchKey, setCountries }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
