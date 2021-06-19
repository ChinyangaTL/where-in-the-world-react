import React from 'react';
import Country from './Country';
import Loading from './Loading';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Countries = () => {
  const { loading, countries } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="countries__container">
        {countries.length > 0 ? (
          countries.map((country) => {
            return (
              <Link
                key={country.alpha3Code}
                to={`country/${country.alpha3Code}`}
              >
                <Country {...country} />
              </Link>
            );
          })
        ) : (
          <h2>No countries found</h2>
        )}
      </div>
    </section>
  );
};

export default Countries;
