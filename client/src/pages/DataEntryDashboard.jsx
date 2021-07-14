import React from 'react';
import LogoutButton from '../components/LogoutButton';

export default function DataEntryDashboard() {
    return (
        <div className="dashboard-root">
                <div className="user-greeting">
                    Welcome to your personal dashboard!
                </div>
                <div className="entry-form"> 
                Add a Record
                <br/>
                First Name: 
                <input type="text"/>
                <br/>
                Last Name: 
                <input type="text"/>
                <br/>
                Profession: 
                <input type="text"/>
                <br/>
                <button>SUBMIT NEW RECORD</button>
                </div>
        </div>
    )
}