import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import NavBarContainer from './navbar/navbar_container';
import HomeContainer from './home/home_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from '..//components/session/login_form_container.js';

const App = () => {
  return (
    <div id="app">
      <NavBarContainer />

      <Switch>
        <ProtectedRoute exact path="/" component={HomeContainer}/>
        <AuthRoute exact={true}
          path="/signup"
          component={SignupFormContainer}
        />
        <Redirect to ="/" />
      </Switch>
    </div>
  )
}

export default App;