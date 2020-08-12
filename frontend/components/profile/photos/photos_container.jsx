import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PhotoItem from './photo_item';

const PhotosContainer = ({ match, location }) => {
  const currentUser = useSelector((state) => state.session);
  const user = useSelector((state) => {
    return state.entities.users[match.params.username];
  });
  const photos = user.photos_arr;
  
  // ! Uncomment when I add photos
  // if (!photos.length) return null;

  // const pathParts = location.pathname.split('/');
  // const lastPathPart = pathParts[pathParts.length - 1];
  // let photoItems, seeAllButton;
  // if (lastPathPart !== 'photos' && photos.length > 8) {
  //   photoItems = photos.slice(0, 8).map((photo, idx) => 
  //     <PhotoItem key={idx} photo={photo}/>
  //   );

  //   seeAllButton =  <Link to={`/u/${match.params.username}/photos`}
  //                     className="see-all"
  //                   >
  //                     See All
  //                   </Link>
  // } else {
  //   photoItems = photos.map((photo, idx) => 
  //     <PhotoItem key={idx} photo={photo}/>
  //   );
  // }
  
  // ! Remove when I add photos
  const photoItems = new Array(8).fill(0).map((photo, idx) => {
    photo = {url: location.pathname};
    return (
      <PhotoItem key={idx} photo={photo}/>  
    );
  });

  const pathParts = location.pathname.split('/');
  const lastPathPart = pathParts[pathParts.length - 1];
  let seeAllButton;
  if (lastPathPart !== 'photos') {
    seeAllButton =  <Link to={`/u/${match.params.username}/photos`}
                      className="see-all"
                    >
                      See All
                    </Link>
  }
  
  return (
    <div id="photos-container" className="profile-info">
      <div className="header-container">
        <img className="photos-icon"></img>
        <Link to={`/u/${match.params.username}/photos`}>
          Photos
        </Link>
      </div>

      <ul className="photo-index">
        {photoItems}
      </ul>

      {seeAllButton}
    </div>
  );
};

export default withRouter(PhotosContainer);