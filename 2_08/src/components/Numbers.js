import React from 'react';

const Numbers = ({numbers}) => {
  const toBeShown = numbers.map((number) => {
    return <div key={number.name}>{number.name} {number.number}</div>}
  );
  return (
    <div>{toBeShown}</div>
  )
}
export default Numbers;
