import Home from './Componentes/Home'
import {  Route, Routes, Link } from "react-router-dom";
import Berners from "./Componentes/Berners";
import Gates from "./Componentes/Gates";
import Torvalds from './Componentes/Torvalds';
import Lovelace from './Componentes/Lovelace';
import Ritchie from './Componentes/Ritchie';

function App() {
  return (
    <div className="App">
      
      <nav>
        <ul className='Lista'>

       <li>
         <Link to="/"> Home</Link>
        </li>
       <li>
        <Link to="/Berneds"> Berneds</Link>
        </li>
       <li>
        <Link to="/Gates"> Gates</Link>
        </li>
       <li>
        <Link to="/Lovelace"> Lovelace</Link>
        </li>
       <li>
        <Link to="/Ritchie"> Ritchie</Link>
        </li>
       <li>
        
        <Link to="/Torvalds"> Torvalds</Link>
        </li>
        </ul>
        <h1>Programadores</h1>
      </nav>

     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="berneds" element={<Berners />} />
          <Route path="gates" element={<Gates />} />
          <Route path="lovelace" element={<Lovelace />} />
          <Route path="ritchie" element={<Ritchie />} />
          <Route path="torvalds" element={<Torvalds />} />
        </Routes>
      
    </div>
  );
}

export default App;
