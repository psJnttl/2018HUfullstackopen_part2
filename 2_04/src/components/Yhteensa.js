import React from 'react'

const Yhteensa = ({osat}) => {
  const yhteensa = osat.map((osa) => osa.tehtavia)
                       .reduce((summa, tehtavat) => summa + tehtavat);
  return (
    <div>
      <p>yhteensä {yhteensa} tehtävää</p>
    </div>
  )
}

export default Yhteensa;
