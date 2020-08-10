import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { parse } from 'query-params-helpers';
import Overview from './sections/overview';
import WorkAndEducation from './sections/work_and_education';
import Hometown from './sections/hometown';
import ContactInfo from './sections/contact_info';
import Relationship from './sections/relationship';
import Bio from './sections/bio';

const AboutContent = ({ location }) => {
  const query = parse(location.search);
  const section = query ? query.section : 'overview';
  
  let content;
  switch (section) {
    case 'overview':
      content = <Overview/>;
      break;
    case 'education':
      content = <WorkAndEducation/>;
      break;
    case 'hometown':
      content = <Hometown/>;
      break;
    case 'contact-info':
      content = <ContactInfo/>;
      break;
    case 'relationship':
      content = <Relationship/>;
      break;
    case 'bio':
      content = <Bio/>;
      break;
  }

  return (
    <div className="content">
      {content}
    </div>
  );
};

export default withRouter(AboutContent);