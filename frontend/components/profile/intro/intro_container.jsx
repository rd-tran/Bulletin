import React from 'react';
import BioContainer from './bio/bio-container';
import DetailsContainer from './details/details-container';

function IntroContainer({ user }) {  
  console.log(user);

  return (
    <div className="intro-container">
      <div className="header-container">
        <div className="globe-icon"></div>
        <span className="header">Intro</span>
      </div>
      <BioContainer user={user}/>
      <DetailsContainer user={user}/>
    </div>
  )
}

export default IntroContainer;