
import './App.css';
import  Main  from './Components/Main';
import Nav   from './Components/Nav';
import MateriaProvider from './context/MateriasProvider'
import Stats from './Components/Stats';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <MateriaProvider>

      <div className="App">
        
        <Router>
          <Nav/>
          <Switch>
           
            <Route path='/diagram'>
              <Main/>
            </Route>
            <Route path='/'>
              <Stats/>
            </Route>
          </Switch>
        </Router>
      </div>
    
    </MateriaProvider>
  );
}

export default App;
