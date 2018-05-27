import React from 'react';

const Numbers = ({numbers, constraint, delPerson}) => {
  const constrained = numbers.filter((item) => {
    const index = item.name.toLowerCase().indexOf(constraint);
    return index === -1 ? false : true;
  });
  const toBeShown = constrained.map((number) => {
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
