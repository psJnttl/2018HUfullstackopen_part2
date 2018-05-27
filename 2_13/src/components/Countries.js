import React from 'react';
import Country from './Country'

const Countries = ({countries, constraint, handleClick, countryName}) => {
  if ("" !== countryName) {
    const country = countries.find((country) => {
      return countryName === country.name;
    });
    return (
      <Country country={country} />
    )
  }
  const constrained = countries.filter((item) => {
    const index = item.name.toLowerCase().indexOf(constraint);
    return index === -1 ? false : true;
  });
  const toBeShown = constrained.map((number) => {
    return <tr onClick={()=>handleClick(number.name)} key={number.name}><td>{number.name}</td><td> {number.number}</td></tr>}
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
      <Country country={country} />
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
