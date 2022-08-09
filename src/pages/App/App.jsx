import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import WeArtistsPage from '../WeArtistsPage/WeArtistsPage'
import AuthPage from '../AuthPage/AuthPage'
import MeProfilePage from '../MeProfilePage/MeProfilePage'
import NavBar from '../../components/NavBar/NavBar'
import { profiles } from "../../data";


export default function App() {
  const [ user, setUser ] = useState(getUser());
  // const [ profile, setProfile ] = useState();



  return (
    <main className="App">
      { 
        user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/artists" element={<WeArtistsPage profiles={profiles} />} />
            <Route path="/profile" element={<MeProfilePage user={user}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
