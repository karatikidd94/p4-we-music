import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import WeArtistsPage from '../WeArtistsPage/WeArtistsPage'
import AuthPage from '../AuthPage/AuthPage'
import MeProfilePage from '../MeProfilePage/MeProfilePage'
import WeArtistsDetailPage from '../WeArtistsDetailPage/WeArtistsDetailPage'
import NavBar from '../../components/NavBar/NavBar'



export default function App() {
  const [ user, setUser ] = useState(getUser());
  const [ profiles, setProfiles] = useState([
    {name: 'Maxwell Knowles', artist: 'Sterling', genre: 'Jazz', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw',
    img: 'https://res.cloudinary.com/glide/image/fetch/f_auto,w_975,h_975,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FFEr6MoVRCVxLM3jJHdZ9%2Fpub%2F7P128Fr6BzYk96wNwDLc.png'},

    {name: 'Alex Azevedo', artist: 'McLovin', genre: 'Soul', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw',
    img: 'https://ca.slack-edge.com/T033HH2NCP7-U035QG691HN-9e90eb4f866e-192'},

    {name: 'Lucy Arnold', artist: 'Pimp PM', genre: 'Rock', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw', 
    img: 'https://ca.slack-edge.com/T033HH2NCP7-U033LE5ECG2-eaa20fb11ff2-512'},

    {name: 'Cliff', artist: 'DBug King', genre: 'Pop', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw', 
    img: 'https://ca.slack-edge.com/T033HH2NCP7-U033HHNTER3-87a560d61d4e-192'},

    {name: 'Courtney Rinden', artist: 'EX Xcullence', genre: 'Country', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw', 
    img: 'https://ca.slack-edge.com/T033HH2NCP7-U0352RUPCN8-a02b38794168-192'},

    {name: 'AJ', artist: 'CodeDJ', genre: 'Techno', 
    spotifyLink: 'https://open.spotify.com/artist/2p2YiVrDP0scQefeefDqCO?si=SqN6EMOsSC-GSSXFJPWkqw', 
    img: 'https://ca.slack-edge.com/T033HH2NCP7-U0350M0QB6E-g97d96b21f21-192'}
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
            <Route path="/artists/:profileName" element={<WeArtistsDetailPage profiles={profiles} />} />
            <Route path="/profile" element={<MeProfilePage user={user} addProfile={addProfile} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
