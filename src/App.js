
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
      transform: "translateX(100%)",

      transition: " 2s"
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
      transition: " 2s"
    },
    leave: {
      opacity: 0,
      transform: "translateX(-100%)",
      transition: " 2s"
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
