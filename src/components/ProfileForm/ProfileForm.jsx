import { useState } from 'react';
// import * as usersService from '../../utilities/users-service';

export default function ProfileForm({ addProfile }) {
  const [newProfile, setNewProfile] = useState({
    name: '',
    artist: '',
    genre: '',
    spotifyLink: '',
    img: '',
  });
  // const [error, setError] = useState('');

  function handleAddProfile(evt) {
    console.log(evt.target.value);
    evt.preventDefault();
    addProfile(newProfile);
    setNewProfile({
      name: '',
      artist: '',
      genre: '',
      spotifyLink: '',
      img: '',
    });
  }

  function handleChange(evt) {
    const newFormData = { ...newProfile, [evt.target.name]: evt.target.value };
    setNewProfile(newFormData);
  }

  return (
    <>
      <hr></hr>
      <br></br>
      <br></br>
      <h1>Profile Form</h1>
      <br></br>
      <form onSubmit={handleAddProfile} >
        <label>Name</label> {/* Artist name */}
        <input 
          value={newProfile.name}
          onChange={handleChange}
          placeholder='Username'/>
        <label>Artist</label> {/* Artist name */}
        <input
          value={newProfile.artist}
          onChange={handleChange} 
          placeholder='Artist Name'/>
        <label>Genre</label> {/* Users created music type */}
        <select value={newProfile.genre} onChange={handleChange}>
          <option value={1}>Hip-Hop</option>
          <option value={2}>Country</option>
          <option value={3}>Jazz</option>
        </select>
        <label>Spotify</label> {/* Artist name */}
        <input
          value={newProfile.spotifyLink} 
          onChange={handleChange}
          placeholder='Paste Spotify Link Here'/>
        <label>Profile Pic</label> {/* Artist name */}
        <input
          value={newProfile.img}
          onChange={handleChange} 
          placeholder='Selet a File'/>
        <button type="submit" >Create Profile</button>
      </form>
    </>
  );

}