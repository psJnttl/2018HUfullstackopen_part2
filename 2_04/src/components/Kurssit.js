import React from 'react'
import Kurssi from './Kurssi'

const Kurssit = ({kurssit}) => {
  const k = kurssit.map((kurssi) => <Kurssi key={kurssi.id} kurssi={kurssi} /> );
  return (
    <div>{k}</div>
  )
}

export default Kurssit
