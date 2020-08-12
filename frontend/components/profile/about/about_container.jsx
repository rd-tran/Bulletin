import React from 'react';
import { useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import AboutSideBar from './about_side_bar';
import AboutContent from './about_content';


const AboutContainer = ({ match }) => {
  const currentUser = useSelector((state) => state.session);
  const user = useSelector((state) => {
    return state.entities.users[match.params.username];
  });
  const name = user.username === currentUser.username ? 'You' : user.fname;
  
  return (
    <div id="about-container" className="profile-info">
      <div className="header-container">
        <img className="profile-icon"></img>
        <Link to={`/u/${match.params.username}/about`}>
          About
        </Link>
      </div>

      <section className="about-section">
        <AboutSideBar name={name}/>
        <AboutContent/>
      </section>
    </div>
  );
};

export default withRouter(AboutContainer);