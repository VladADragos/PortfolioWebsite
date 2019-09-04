import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/main.css';
import { Home } from './components/pages/Home';

import { Calculator } from './components/portfolioItems/Calculator';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/React-Calculator' component={Calculator} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
