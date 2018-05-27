import React from 'react';

const Country = ({country}) => {
  return (
    <div>
      <div>
        <h3>{country.name} {country.altSpellings[1]}</h3>
      </div>
      <div>
        capital: {country.capital}
      </div>
      <div>
        population: {country.population}
      </div>
      <div><img src={country.flag} height={100} alt="flag"/></div>
    </div>
  );
}

export default Country;
