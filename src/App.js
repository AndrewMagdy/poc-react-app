import React, { Component } from "react";
import BasketContainer from "./containers/BasketContainer";
import ItemsListContainer from "./containers/ItemsListContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore({});

class App extends Component {
  componentWillMount() {
    if (this.props.stateChange) {
      this.props.stateChange(store.getState()); //Initial State
      store.subscribe(() => this.props.stateChange(store.getState()));
    }
  }

  render() {
    const { angularTestProp, angularNavigateTo } = this.props;
    
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
                angularNavigateTo={angularNavigateTo}
              />
            )}
          />
          <Route
            path="/dashboard"
            component={props => (
              <ItemsListContainer
                {...props}
                angularTestProp={angularTestProp}
                angularNavigateTo={angularNavigateTo}
              />
            )}
          />
          <Route
            path="/basket"
            exact
            component={props => (
              <BasketContainer
                {...props}
                angularNavigateTo={angularNavigateTo}
              />
            )}
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
            component={props => (
              <BasketContainer
                {...props}
                angularNavigateTo={angularNavigateTo}
              />
            )}
          />
        </Router>
      </Provider>
    );
  }
}

export default App;
