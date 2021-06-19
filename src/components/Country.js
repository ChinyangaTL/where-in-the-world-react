import React from 'react';

const Country = ({ flag, name, alpha3Code, region, population, capital }) => {
  return (
    <article className="card">
      <div className="card__img">
        <img src={flag} alt="" />
      </div>
      <footer className="card__footer">
        <h3>{name}</h3>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </footer>
    </article>
  );
};

export default Country;
