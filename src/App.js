import { useState } from 'react';
import './App.css';
import  Main  from './Components/Main';
import Nav   from './Components/Nav';
import MateriaProvider from './context/MateriasProvider'

function App() {

  const [materiasCompletas, setMateriasCompletas] = useState([]);

  return (
    <MateriaProvider>

      <div className="App">
        <Nav/>
        <Main/>
      </div>
    
    </MateriaProvider>
  );
}

export default App;
