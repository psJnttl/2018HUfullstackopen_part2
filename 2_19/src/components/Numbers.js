import React from 'react';

const Numbers = ({numbers, constraint, delPerson}) => {
  const constrained = numbers.filter((item) => {
    const index = item.name.toLowerCase().indexOf(constraint);
    return index === -1 ? false : true;
  });
  const sorted = constrained.sort(function(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    else {
      return 0;
    }
  });
  const toBeShown = sorted.map((number) => {
    return <tr key={number.name}><td>{number.name}</td><td> {number.number}</td><td><button onClick={()=>delPerson(number.id)}>poista</button></td></tr>}
  );

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
export default Numbers;
