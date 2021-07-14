import '../styles/NavBar.css'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'

export default function NavBar() {

    const {isAuthenticated} = useAuth0()

    return (
        <div className="navbar-root">
            {isAuthenticated ? (<><LogoutButton/></>) : (<></>)}
        </div>
    )
}