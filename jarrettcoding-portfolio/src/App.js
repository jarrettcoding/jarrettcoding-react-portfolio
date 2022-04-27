import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" compenent={Main} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
