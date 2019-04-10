import React, { Component } from "react";
import BasketContainer from "./containers/BasketContainer";
import ItemsListContainer from "./containers/ItemsListContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore({});

class App extends Component {
  componentDidMount() {
    if (this.props.stateChange) {
      store.subscribe(() => this.props.stateChange(store.getState()));
    }
  }

  render() {
    const { angularTestProp } = this.props;
    //const angularTestProp = "Hello from angular";

    return (
      <Provider store={store}>
        <Router>
          <Route
            path="/"
            exact
            component={props => (
              <ItemsListContainer
                {...props}
                angularTestProp={angularTestProp}
              />
            )}
          />
          <Route
            path="/dashboard"
            component={props => (
              <ItemsListContainer
                {...props}
                angularTestProp={angularTestProp}
              />
            )}
          />
          <Route
            path="/basket"
            exact
            component={props => <BasketContainer {...props} />}
          />
          <Route
            path="/items"
            component={props => (
              <ItemsListContainer
                {...props}
                angularTestProp={angularTestProp}
              />
            )}
          />
          <Route
            path="/detail/:x"
            component={props => <BasketContainer {...props} />}
          />
        </Router>
      </Provider>
    );
  }
}

export default App;
