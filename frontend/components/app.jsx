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
      <header id="header">
        <NavBarContainer />
      </header>

      <section id="main-section">
        <Switch>
          <ProtectedRoute exact path="/" component={HomeContainer}/>
          <AuthRoute exact={true}
            path="/signup"
            component={SignupFormContainer}
          />
          <AuthRoute exact={true}
            path="/login"
            component={LoginFormContainer}
          />
          <Redirect to ="/" />
        </Switch>
      </section>
    </div>
  )
}

export default App;