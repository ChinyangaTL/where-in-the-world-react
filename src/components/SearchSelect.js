import React, { useCallback } from 'react';
import regions from '../regions';
import { useGlobalContext } from '../context';

const SearchSelect = () => {
  const { setCountries, countries } = useGlobalContext();
  const [region, setRegion] = React.useState('');

  const oldCountries = [...countries];
  const handleChange = useCallback(
    (e) => {
      setRegion(e.target.value);
      // console.log(region);
      // console.log(oldCountries);
      if (e.target.value === 'All') {
        setCountries(oldCountries);
      }
      // console.log(e.target.value);
      const filteredCountries = countries.filter((country) => {
        // console.log(countries);
        // console.count(countries);
        return country.region === e.target.value;
      });
      setCountries(filteredCountries);
      // const oldCountries = [...countries];
      // setCountries(oldCountries);
      // setCountries(countries.filter((country) => country.region === e));
      // console.log('old countries', oldCountries);
      // console.log('ountries', countries);
    },
    [countries, setCountries, setRegion, region]
  );

  return (
    <>
      <select
        name="select"
        id="filter--select"
        className="filter--select"
        value={region}
        onChange={handleChange}
      >
        {regions.map((region, index) => {
          return (
            <option key={index} value={region.value}>
              {region.label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SearchSelect;
