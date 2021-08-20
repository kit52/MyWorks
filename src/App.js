
import './App.css';
import { Route, Switch, useLocation } from "react-router-dom";
import Home from './components/Home/Home';
import Myworks from './components/Myworks/Myworks';
import { useTransition, animated } from "react-spring";
function App() {
  let location = useLocation();

  let transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: "scale(0)",
      transition: " 1s"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      transition: " 1s"
    },
    leave: {
      opacity: 0,
      transform: "scale(0)",
      transition: " 1s"
    }
  })

  return transitions((props, item) => (
    <div className="App">
      <animated.div style={props} className="animated_div">
        <Switch location={item}>
          <Route exact
            path="/"
            component={Home}
          />
          <Route exact
            path="/Myworks"
            component={Myworks}
          />
        </Switch>
      </animated.div>
    </div>
  ))

}


export default App;
