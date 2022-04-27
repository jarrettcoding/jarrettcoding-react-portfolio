import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Components/Nav";

import Main from "./Pages/Main";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          {/* <Switch> */}
          <Route exact path="/" compenent={Main} />
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
