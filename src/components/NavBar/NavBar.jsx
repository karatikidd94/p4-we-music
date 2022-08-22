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
            <Link user={user} to="/">
                <button>MeProfile</button>
            </Link>
            <Link user={user} to="/artists">
                <button>WeArtists</button>
            </Link>  
            <Link user={user} onClick={handleLogOut} to="">
                <button>Log Out</button>
            </Link>
            <span className='welcome-user'>Welcome, {user.name}</span>
        </nav>
    )
}