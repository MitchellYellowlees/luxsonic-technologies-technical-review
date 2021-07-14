import React from 'react';
import '../styles/DataEntryDashboard.css';

export default function DataEntryDashboard() {
    return (
        <div className="dashboard-root">
                <div className="user-greeting">
                    Welcome to your personal dashboard!
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
                <button className="submit">SUBMIT NEW RECORD</button>
                </div>
        </div>
    )
}