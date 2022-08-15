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
import * as messagesAPI from '../../utilities/messages-api'


export default function App() {
  const [ user, setUser ] = useState(getUser());
  const [ profile, setProfile ] = useState(null);
  const [ profiles, setProfiles ] = useState([]);
  const [ messages, setMessages ] = useState([]);

  useEffect(function() {
    // create function to retrive current logged in user profile
    if(user) {
      async function getProfile() {
        const profile = await profilesAPI.getProfile();
        setProfile(profile);
        console.log("App useEffect profile: ", profile);
      }
      getProfile();
    }

  }, [user]);


    useEffect(function() {
        async function getProfiles() {
            const profiles = await profilesAPI.getAll();
            setProfiles(profiles);
        }
        getProfiles();
    }, []);

    useEffect(function() {
      async function getMessages() {
        const messages = await messagesAPI.getAll();
        setMessages(messages);
      }
      getMessages();
    }, []);

    console.log("App useEffect profiles: ", profiles);
    console.log("App useEffect Messages: ", messages);

  return (
    <main className="App">
      { 
        user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          {/* <WeArtistsPage profiles={profiles} messages={messages} /> */}
          <Routes>
            <Route path="/artists" element={<WeArtistsPage user={user} profiles={profiles} />} />
            <Route path="/artists/:profileName" element={<WeArtistsDetailPage user={user} profiles={profiles} messages={messages} setMessages={setMessages}  />} />
            <Route path="/profile" element={<MeProfilePage user={user} setProfile={setProfile} profile={profile} messages={messages} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
