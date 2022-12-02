import React from 'react'
import Berner from '../assets/img/Berners.png'

function Berners() {
  return (
    <div>
      <h3>Tim Berners</h3>
      <img src={Berner} width="25%"/>
      <p>
      ¿Sabías que la web fue creada por frustración?<br></br>
      En el año 1984, Berners-Lee estaba frustrado mientras trabajaba como investigador en el CERN (Organización Europea para la Investigación Nuclear), porque los métodos para compartir información eran demasiado engorrosos:
      Había que intercambiar correos electrónicos, o aún peor, iniciar y cerrar sesión en diferentes ordenadores para acceder a la información.
      </p>
    </div>
  )
}

export default Berners;