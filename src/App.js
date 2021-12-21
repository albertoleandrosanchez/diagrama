
import './App.css';
import  Main  from './pages/Main';
import Nav from './Components/Nav';
import Stats from './pages/Stats';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect,

} from "react-router-dom";
import useAuth from './hooks/useAuth';
import firebase from './api/firebase';

function App() {

  return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route exact path="/login">
              <Login/>
            </Route>
            <RequireAuth>
              <Route exact path='/diagram'>
                <Main/>
              </Route>
              <Route exact path='/'>
                <Stats/>
              </Route>
            </RequireAuth>
          </Switch>
        </Router>
      </div>
  );
}

function RequireAuth({ children }) {
  const  {auth} = useAuth();
  let location = useLocation();

  if (!auth.user) {
  //   // Redirect them to the /login page, but save the current location they were
  //   // trying to go to when they were redirected. This allows us to send them
  //   // along to that page after they login, which is a nicer user experience
  //   // than dropping them off on the home page.
    return <Redirect to="/login" state={{ from: location }} />;
  }

  return children;
}

export default App;
