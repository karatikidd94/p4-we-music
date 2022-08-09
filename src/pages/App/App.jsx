import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import WeArtistsPage from '../WeArtistsPage/WeArtistsPage'
import AuthPage from '../AuthPage/AuthPage'
import MeProfilePage from '../MeProfilePage/MeProfilePage'
import NavBar from '../../components/NavBar/NavBar'



export default function App() {
  const [ user, setUser ] = useState(getUser());
  const [ profiles, setProfiles] = useState([
    {name: 'Maxwell Knowles', artist: 'Sterling', genre: 'Jazz', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw',
    img: 'https://res.cloudinary.com/glide/image/fetch/f_auto,w_975,h_975,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FFEr6MoVRCVxLM3jJHdZ9%2Fpub%2F7P128Fr6BzYk96wNwDLc.png'},
  ]);

  function addProfile(profile) {
    setProfiles([...profiles, profile]);
  }



  return (
    <main className="App">
      { 
        user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/artists" element={<WeArtistsPage profiles={profiles} />} />
            <Route path="/profile" element={<MeProfilePage user={user} addProfile={addProfile} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
