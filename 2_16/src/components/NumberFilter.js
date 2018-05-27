import React from 'react';

const NumberFilter = ({constraint, handleConstraint}) => (
  <div>
    Rajaa näytettäviä:
    <input value={constraint}
      onChange={handleConstraint} />
  </div>
);
export default NumberFilter;
