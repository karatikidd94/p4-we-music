import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import WeArtistsPage from '../WeArtistsPage/WeArtistsPage'
import AuthPage from '../AuthPage/AuthPage'
import MeProfilePage from '../MeProfilePage/MeProfilePage'
import WeArtistsDetailPage from '../WeArtistsDetailPage/WeArtistsDetailPage'
import NavBar from '../../components/NavBar/NavBar'
import * as profilesAPI from '../../utilities/profiles-api'


export default function App() {
  const [ user, setUser ] = useState(getUser());
  const [ profile, setProfile ] = useState(null);
  const [ profiles, setProfiles ] = useState([]);

  useEffect(function() {
    // create function to retrive current logged in user profile
    if(user) {
      async function getProfile() {
        const profile = await profilesAPI.getProfile();
        setProfile(profile);
        console.log("App: ", profile);
      }
      getProfile();
    }

  }, [user]);


    useEffect(function() {
        async function getProfiles() {
            const profiles = await profilesAPI.getAll();
            setProfiles(profiles);
        }
        getProfiles()
    }, []);

    console.log("ArtistsPage profiles: ", profiles);

  return (
    <main className="App">
      { 
        user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          {/* <ProfileForm user={user} profile={profiles} addProfile={addProfile} /> */}
          <Routes>
            <Route path="/artists" element={<WeArtistsPage profiles={profiles} />} />
            <Route path="/artists/:profileName" element={<WeArtistsDetailPage profiles={profiles}  />} />
            <Route path="/profile" element={<MeProfilePage user={user} setProfile={setProfile} profile={profile}  />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
