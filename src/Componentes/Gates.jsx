import React from 'react';
import gates from '../assets/img/BillGates.jpg'

function Gates() {
  return (
    <div>
      <h3>Bill Gates</h3>
      <img src={gates} width="25%" />
      <p>
      La mayoría recuerda a Bill Gates como un empresario multimillonario, pero muchos ignoran qué fue lo que llevó hasta ese lugar: <br></br>
      Cuando era apenas un muchacho podía pasarse de 14 a 16 horas programando sin parar. Tanto así que se "desmayaba" del sueño frente al teclado y continuaba en la misma línea de código donde se había quedado, ¡Y cuando no podía programar en una computadora, lo hacía en papel!
      </p>
    </div>
  )
}

export default Gates