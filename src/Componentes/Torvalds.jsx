import React from 'react'
import linus from '../assets/img/linus.jpg'

function Torvalds() {
  return (
    <div>
      <h3>Linus Torvalds</h3>
      <img src={linus} width ="20%"  />
      <p>
      En 1980, su abuelo compró uno de los primeros ordenadores Commodore y le pedía “ayuda” a Linus para utilizarla (el abuelo escribía los programas en BASIC y Linus los tipeaba). Tanta fue la influencia, que en 1988 entró en la Universidad de Helsinki, donde estudió ciencias de la computación.
      Y a la edad de 21 años, en octubre del 91, anunció la primera versión de Linux.
      </p>
    </div>
  )
}

export default Torvalds