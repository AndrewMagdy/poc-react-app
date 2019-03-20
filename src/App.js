import React, { Component } from "react";
import XComponent from "./XComponent";
import YComponent from "./YComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "rc-calendar/dist/rc-calendar.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/x/">XComponent</Link>
                </li>
                <li>
                  <Link to="/y/">YComponent</Link>
                </li>
                <li>
                  <Link to="/detail/12/">Angular Test</Link>
                </li>
              </ul>
            </nav>

            <Route path="/y" exact component={YComponent} />
            <Route path="/x" component={XComponent} />
            <Route path="/detail/12" component={YComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
