import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import Login from './containers/login';
import User from './containers/userInfo';
import Register from './containers/register';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    //
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => window.localStorage.getItem('token') ?
      <Component {...props}/> : <Redirect to='/'/>}
      />
    );

    return (
      <div>
      <Router history={history}>
        <Switch>
          <PrivateRoute path='/dashboard' component={Dashboard}/>
          <Route exact path='/register' component={Register}/>
          <PrivateRoute path='/user' component={User}/>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
