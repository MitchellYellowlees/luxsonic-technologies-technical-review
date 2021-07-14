import '../styles/NavBar.css'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'
import { NavLink } from 'react-router-dom'

export default function NavBar() {

    const {isAuthenticated} = useAuth0()

    return (
        <div className="navbar-root">
            {isAuthenticated ? (<>
            <p className="nav-item">
                <NavLink to={'/'} id="NavToDataEntry">
                    <div className="nav-link">Home</div>
                </NavLink>
                </p>
                <p className="nav-item">
                <NavLink to={'/data'} id="NavToDataView">
                    <div className="nav-link">Data</div>
                </NavLink>
                </p>
                <LogoutButton/></>) : (<></>)}
        </div>
    )
}