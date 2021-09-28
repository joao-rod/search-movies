import React from 'react';  
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Result } from '../pages/Result';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/result" exact component={Result}/>
  </Switch>
)