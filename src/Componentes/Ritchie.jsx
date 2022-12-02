import React from 'react'
import ritchie from '../assets/img/Ritchie.jpg'

function Ritchie() {
  return (
    <div>
      <h3>Dennis Ritchie</h3>
      <img src={ritchie} width="25%" />
      <p>
      Si Ada Lovelace escribió el primer programa, y Grace Hopper escribió el primer compilador, el siguiente programador diseñó el primer sistema operativo de la historia.<br></br>
      Dennis Ritchie decía que él no era lo suficientemente inteligente para ser físico o matemático (sí lo era), pero le gustaba la programación. Por eso en 1967 abandonó su postgrado de Matemáticas Aplicadas en Harvard para entrar en los legendarios Laboratorios Bell que son como la cuna de Silicon Valley
      </p>
    </div>
  )
}

export default Ritchie