import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/home';
import FourOhFour from './components/four-oh-four';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="*" component={FourOhFour} />
  </Router>
);

export default Routes;
