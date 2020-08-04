import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

// function Profile({ match }) {
//   const dispatch = useDispatch;

//   const currentUser = useSelector( (state) => state.session );
//   const user = useSelector( (state) => 
//     state.entities.users[match.params.username]
//   );
  
//   useEffect(() => {
//     dispatch(fetchUser(user.id));
//     console.log(user);
//   }, []);
  
//   if (!user.email) return null;

//   return (
//     <div className="profile-container">
//       {Object.keys(user).map( (attr, idx) => {
//         return <li key={idx}>{attr}: {user[attr]}</li>
//       })}
//     </div>
//   );
// }

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.user.id)
  }
  
  render() {
    const { currentUser, user } = this.props;
    
    if (!user.email) return null;

    debugger
    
    return (
      <div className="profile-container">
        {Object.keys(user).map( (attr, idx) => {
          return <li key={idx}>{attr}: {user[attr]}</li>
        })}
      </div>
    )
  }
}

export default Profile;