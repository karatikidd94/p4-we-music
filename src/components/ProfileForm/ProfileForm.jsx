// import { useState } from 'react';
// import * as usersService from '../../utilities/users-service';

export default function ProfileForm() {
  // const [profile, setProfile] = useState({
  //   name: '',
  //   artist: '',
  //   genre: '',
  //   spotifyLink: '',
  //   img: '',
  //   user: ''
  // });
  // const [error, setError] = useState('');

  // function handleAddProfile(evt) {
  //   console.log(evt.target.value);
  //   evt.preventDefault();

  // }

  return (
    <>
      <hr></hr>
      <br></br>
      <br></br>
      <h1>Profile Form</h1>
      <br></br>
      <form>
        <label>Name</label> {/* Artist name */}
        <input placeholder='Username'/>
        <label>Artist</label> {/* Artist name */}
        <input placeholder='Artist Name'/>
        <label>Genre</label> {/* Users created music type */}
        <select>
          <option value={1}>Hip-Hop</option>
          <option value={2}>Country</option>
          <option value={3}>Jazz</option>
        </select>
        <label>Spotify</label> {/* Artist name */}
        <input placeholder='Paste Spotify Link Here'/>
        <label>Profile Pic</label> {/* Artist name */}
        <input placeholder='Selet a File'/>
        <button>Create Profile</button>
      </form>
    </>
  );

}