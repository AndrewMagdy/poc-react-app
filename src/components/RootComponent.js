import React, { Component } from "react";
import { Link } from "react-router-dom";

class RootComponent extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/basket/">Basket</Link>
            </li>
            <li>
              <Link to="/items/">Items</Link>
            </li>
            <li>
              <Link to="/detail/12/">Angular Test</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default RootComponent;
