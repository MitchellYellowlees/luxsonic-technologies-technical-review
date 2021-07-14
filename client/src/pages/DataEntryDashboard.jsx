import React from 'react';
import '../styles/DataEntryDashboard.css';
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { fetchUserInfoAsync, fetchUserEntriesAsync } from '../redux/stores/user/actions';
import { useEffect } from 'react'

export default function DataEntryDashboard() {
    const { user } = useAuth0()
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            console.log("Buongiorunio")
            dispatch(fetchUserInfoAsync(user))
        }
    }, [])

    return (
        <div className="dashboard-root">
                <div className="user-greeting">
                    Welcome to your personal dashboard {user.email}!
                </div>
                <div className="entry-form"> 
                <div className="info">Add a Record</div>
                <br/>
                <div className="inputs">
                First Name: 
                <input className="field" type="text"/>
                </div>
                <br/>
                <div className="inputs">
                Last Name: 
                <input className="field" type="text"/>
                </div>
                <br/>
                <div className="inputs">
                Profession: 
                <input className="field" type="text"/>
                </div>
                <br/>
                <button className="submit">SUBMIT NEW RECORD </button>
                </div>
        </div>
    )
}