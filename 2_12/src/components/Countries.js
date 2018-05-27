import React from 'react';

const Countries = ({numbers, constraint}) => {
  const constrained = numbers.filter((item) => {
    const index = item.name.toLowerCase().indexOf(constraint);
    return index === -1 ? false : true;
  });
  const toBeShown = constrained.map((number) => {
    return <tr key={number.name}><td>{number.name}</td><td> {number.number}</td></tr>}
  );
  if (constrained.length > 10) {
    return (
      <div>
        Too many matches, be more specific.
      </div>
    )
  }
  else if (constrained.length === 1) {
    const country = constrained[0];
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
    )
  }
  return (
    <div>
      <table>
        <tbody>
          {toBeShown}
        </tbody>
      </table>
    </div>
  )
}
export default Countries;
