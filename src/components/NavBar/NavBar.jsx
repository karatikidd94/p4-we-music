import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className='navbar'>
            <span className='nav-logo'>WeMusic</span>
            <button user={user} to="/profile">MeProfile</button>
            &nbsp; | &nbsp;
            <button to="/">WeArtists</button>
            &nbsp; | &nbsp;    
            <button to="" onClick={handleLogOut}>Log Out</button>       
            &nbsp; | &nbsp;
            <span className='welcome-user'>Welcome, {user.name}</span>
        </nav>
    )
}