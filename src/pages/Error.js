import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="section">
      <p>Whoops, nothing here</p>
      <Link className="btn flex" to="/">
        Go Back
      </Link>
    </section>
  );
};

export default Error;
