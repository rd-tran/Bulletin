import React from 'react';
import Work from './work';
import Education from './education';
import Hometown from './hometown';
import Relationship from './relationship';
import NamePronunciation from './name_pronunciation';
import Website from './website';
import DetailItem from './details';

function DetailsContainer({ user }) {  
  return (
    <div className="details-container">
      <DetailItem detail={ {name: 'work', data: user.work } }/>
      <DetailItem detail={ {name: 'education', data: user.education } }/>
      <DetailItem detail={ {name: 'hometown', data: user.hometown } }/>
      <DetailItem
        detail={ {name: 'relationship', data: user.relationship_status_id } }
      />
      <DetailItem
        detail={ {name: 'namePronunciation', data: user.name_pronunciation } }
      />
      <DetailItem detail={ {name: 'website', data: user.website } }/>
      {/* <Work work={user.work}/>
      <Education education={user.education}/>
      <Hometown hometown={user.hometown}/>
      <Relationship relationship={user.relationship}/>
      <NamePronunciation namePronunciation={user.namePronunciation}/>
      <Website website={user.website}/> */}
      <button>Edit Details</button>
    </div>
  )
}

export default DetailsContainer;