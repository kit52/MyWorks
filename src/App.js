import logo from './logo.svg';
import './App.css';
import { HashRouter, Redirect, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Myworks from './components/Myworks/Myworks';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Redirect from="/" to="/Home" />
        <Route
          path="/Home"
          render={() => (<Home />)}
        />
        <Route
          path="/Myworks"
          component={() => <Myworks />}
        />
      </HashRouter>
    </div>
  );
}

export default App;
