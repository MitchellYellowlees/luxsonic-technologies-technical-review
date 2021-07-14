import React from 'react';
import '../styles/DataViewingDashboard.css';

export default function DataViewingDashboard() {
    return (
        <div className="dashboard-root">
                <div className="user-greeting">
                    Your Data Records
                    <button className="export">EXPORT ALL ENTRIES</button>
                </div>
                <div className="data-display"> 
                
                </div>
        </div>
    )
}