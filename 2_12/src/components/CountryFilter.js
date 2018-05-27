import React from 'react';

const CountryFilter = ({constraint, handleConstraint}) => (
  <div>
    find a country:
    <input value={constraint}
      onChange={handleConstraint} />
  </div>
);
export default CountryFilter;
