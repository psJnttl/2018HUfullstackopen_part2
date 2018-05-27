import React from 'react'
import Osa from './Osa'

const Sisalto = ({osat}) => {
  const kaikkiOsat = osat.map( (osa) =>
    <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />);
  return (
    <div>
      {kaikkiOsat}
    </div>
  )
}

export default Sisalto;
