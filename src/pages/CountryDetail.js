import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';

const url = 'https://restcountries.eu/rest/v2/alpha/';

const CountryDetail = () => {
  const { code } = useParams();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCountry = async () => {
      try {
        const res = await fetch(`${url}${code}`);
        const data = await res.json();
        setCountry(data);
        setLoading(false);
      } catch (err) {}
    };
    getCountry();
  }, [code]);

  if (loading) {
    return <Loading />;
  }

  if (!country.name) {
    return <h2>no country data found</h2>;
  }

  return (
    <>
      ;
      <section className="section">
        <Link className="btn flex" to="/">
          <FaArrowLeft className="btn__icon" />
          Back
        </Link>
      </section>
      <section className="section section--info">
        <div className="img-wrapper">
          <img src={country.flag} alt={country.name} />
        </div>
        <div className="info">
          <h2 className="info__name">{country.name}</h2>
          <div className="info-wrapper section--2">
            <div className="info--detailed--1">
              <p>
                <span className="data">Native Name: </span>
                {country.nativeName}
              </p>
              <p>
                <span className="data">Population: </span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="data">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="data">Sub Region: </span>
                {country.subRegion}
              </p>
              <p>
                <span className="data">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="info--detailed--2">
              <p>
                <span className="data">Top Level Domain: </span>
                {country.topLevelDomain}
              </p>
              <p>
                <span className="data">Currencies: </span>
                {country.currencies.map((currency) => {
                  return <>{currency.name}, </>;
                })}
              </p>
              <p>
                <span className="data">Languages: </span>
                {country.languages.map((language) => {
                  return <>{language.name}, </>;
                })}
              </p>
            </div>
          </div>

          <div className="borders">
            <p>
              <span className="data">Border Countries: </span>
              {country.borders.map((border, index) => {
                return (
                  <Link
                    className="btn btn--link"
                    key={index}
                    to={`/country/${border}`}
                  >
                    {border}
                  </Link>
                );
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryDetail;
