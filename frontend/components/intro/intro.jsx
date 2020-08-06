import React from 'react';
import BioContainer from './bio/bio-container';
import DetailsContainer from './details/details-container';

function Intro({ user }) {  
  console.log(user);

  return (
    <div className="intro">
      <BioContainer user={user}/>
      <DetailsContainer user={user}/>
    </div>
  )
}

export default Intro;