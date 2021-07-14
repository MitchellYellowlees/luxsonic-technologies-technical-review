import React from 'react';
import '../styles/DataEntryDashboard.css';
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserInfoAsync, fetchUserEntriesAsync } from '../redux/stores/user/actions';
import { createEntryAsync } from '../redux/stores/entry/actions';
import { useEffect } from 'react'

export default function DataEntryDashboard() {
    const { user } = useAuth0()
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.user.info)

    useEffect(() => {
        if (user) {
            dispatch(fetchUserInfoAsync(user))
        }
    }, [])

    function submitEntry() {
        var today = new Date();
        var day = String(today.getDate()).padStart(2, '0');
        var month = String(today.getMonth()+1).padStart(2, '0');
        var year = today.getFullYear();
        today = month+'/'+day+'/'+year;
        const newEntry = { firstName: document.getElementById("firstIn").value,
        lastName: document.getElementById("lastIn").value, 
        profession: document.getElementById("profIn").value, 
        date: today, 
        owner: userInfo._id}
        console.log(newEntry.owner)
        dispatch(createEntryAsync(newEntry))
    }

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
                <input className="field" type="text" id="firstIn"/>
                </div>
                <br/>
                <div className="inputs">
                Last Name: 
                <input className="field" type="text" id="lastIn"/>
                </div>
                <br/>
                <div className="inputs">
                Profession: 
                <input className="field" type="text" id="profIn"/>
                </div>
                <br/>
                <button className="submit" onClick={() => submitEntry()}>SUBMIT NEW RECORD </button>
                </div>
        </div>
    )
}