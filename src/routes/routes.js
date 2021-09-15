import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/home.jsx'
import Login from '../pages/login/login.jsx'
import SignUp from '../pages/signup/signup.jsx'
import Menu from '../pages/menu/menu.jsx'
import Kitchen from '../pages/kitchen/kitchen.jsx'
import Orders from '../pages/orders/orders.jsx'
import NotFound from '../pages/notfound/notfound.jsx'
import PrivateRoute from './privateRoute.js';

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <PrivateRoute path='/menu' component={Menu} />
          <PrivateRoute path='/kitchen' component={Kitchen} />
          <PrivateRoute path='/orders' component={Orders} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;