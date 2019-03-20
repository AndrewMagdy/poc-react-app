import React, { Component } from "react";
import RootComponent from "./components/RootComponent";
import BasketContainer from "./containers/BasketContainer";
import ItemsListContainer from "./containers/ItemsListContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

class App extends Component {
  constructor(props) {
    super(props);

    this.store = this.store = configureStore(props.initialState || {});
  }
  componentDidMount() {
    if (this.props.stateChange) {
      this.store.subscribe(() => this.props.stateChange(this.store.getState()));
    }
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <Route path="/" component={RootComponent} />
          <Route path="/basket" exact component={BasketContainer} />
          <Route path="/items" component={ItemsListContainer} />
          <Route path="/detail/:x" component={BasketContainer} />
        </Router>
      </Provider>
    );
  }
}

export default App;
