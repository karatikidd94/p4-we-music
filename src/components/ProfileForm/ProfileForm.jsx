import { useState } from 'react';
import { createProfile } from '../../utilities/profiles-api';

export default function ProfileForm({ user, profile, setProfile }) {
  const [newProfile, setNewProfile] = useState({
    name: '',
    artist: '',
    genre: '',
    spotifyLink: '',
    img: '',
    user: '',
  });

  async function handleAddProfile(evt) {
    evt.preventDefault();
    const updatedProfile = {...newProfile, user: user._id}
    const profile = await createProfile(updatedProfile);
    setProfile(profile);
    console.log("Handle Add Profile from ProfileForm: ", profile);
  }

  function handleChange(evt) {
    setNewProfile({ ...newProfile, [evt.target.name]: evt.target.value });
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
          name="name"
          value={newProfile.name}
          onChange={handleChange}
          placeholder='Username'/>
        <label>Artist</label> {/* Artist name */}
        <input
          name="artist"
          value={newProfile.artist}
          onChange={handleChange} 
          placeholder='Artist Name'/>
        <label>Genre</label> {/* Users created music type */}
        <select name="genre" value={newProfile.genre} onChange={handleChange}>
          <option value={"Hip-Hop"}>Hip-Hop</option>
          <option value={"Country"}>Country</option>
          <option value={"Jazz"}>Jazz</option>
        </select>
        <label>Spotify</label> {/* Artist name */}
        <input
          name="spotifyLink"
          value={newProfile.spotifyLink} 
          onChange={handleChange}
          placeholder='Paste Spotify Link Here'/>
        <label>Profile Pic</label> {/* Artist name */}
        <input
          name="img"
          value={newProfile.img}
          onChange={handleChange} 
          placeholder='Select a File'/>
        <button type="submit" >Create Profile</button>
      </form>
    </>
  );

}