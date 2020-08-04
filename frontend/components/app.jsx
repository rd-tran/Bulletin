import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import NavBarContainer from './navbar/navbar_container';
import HomeContainer from './home/home_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import Profile from './profile/profile';

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
        <Route path="/u/:username">
          <ProfileContainer/>
        </Route>
        <Redirect to ="/" />
      </Switch>
    </div>
  )
}

export default App;