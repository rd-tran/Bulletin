import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const AboutSideBar = ({ name, match, location }) => {
  let overview, education, hometown, contactInfo, relationship, bio;
  switch (location.search.split('section=')[1]) {
    case 'overview':
      overview = 'active';
      break;
    case 'education':
      education = 'active';
      break;
    case 'hometown':
      hometown = 'active';
      break;
    case 'contact-info':
      contactInfo = 'active';
      break;
    case 'relationship':
      relationship = 'active';
      break;
    case 'bio':
      bio = 'active';
      break;
  }
  
  return (
    <div className="side-bar">
      <Link to={`/u/${match.params.username}/about?section=overview`}
        className={overview}
      >Overview</Link>
      
      <Link to={`/u/${match.params.username}/about?section=education`}
        className={education}
      >Work and Education</Link>

      <Link to={`/u/${match.params.username}/about?section=hometown`}
        className={hometown}
      >Location</Link>

      <Link to={`/u/${match.params.username}/about?section=contact-info`}
        className={contactInfo}
      >Contact And Basic Info</Link>
      
      <Link to={`/u/${match.params.username}/about?section=relationship`}
        className={relationship}
      >Relationship</Link>
      
      <Link to={`/u/${match.params.username}/about?section=bio`}
        className={bio}
      >Details About {name}</Link>
    </div>
  );
};

export default withRouter(AboutSideBar);