import React from 'react'

const Yhteensa = ({osat}) => {
  let yhteensa = 0;
  for (let i = 0; i < osat.length; i++) {
    yhteensa += osat[i].tehtavia;
  }
  
  return (
    <div>
      <p>yhteensä {yhteensa} tehtävää</p>
    </div>
  )
}

export default Yhteensa;
