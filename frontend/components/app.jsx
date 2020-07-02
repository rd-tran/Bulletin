import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import NavBarContainer from './navbar/navbar_container';
import HomeContainer from './home/home_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => {
  return (
    <div id="main-section">
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