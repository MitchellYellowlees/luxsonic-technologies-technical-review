import React from 'react';
import '../styles/DataViewingDashboard.css';
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserInfoAsync, fetchUserEntriesAsync } from '../redux/stores/user/actions';
import { DataRecord } from '../components/DataRecord';

export default function DataViewingDashboard() {

    const { user } = useAuth0()
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.user.info)
    const allEntries = useSelector((state) => state.user.entries)

    useEffect(() => {
        if (user) {
            dispatch(fetchUserInfoAsync(user))
            dispatch(fetchUserEntriesAsync(user.email))
        }
    }, [])


    const renderEntries = () => {
        if(allEntries!=null){
        if (allEntries.length!=0){
            return allEntries.map((entry, i) => {
                return <DataRecord entry={entry} key={i}/>
            })
        }
    }
        return <button/>
    }

    function exportData() {
        if(allEntries!=undefined){
        let rows = []
        for (let i = allEntries.length; i>0; i--){
            let row = [allEntries[i-1].firstName,
            allEntries[i-1].lastName,
            allEntries[i-1].profession,
            allEntries[i-1].date,
            allEntries[i-1]._id]
            rows.push(row);
        }
        let csvData = "data:text/csv:charset=utf-8," + rows.map(e => e.join(",")).join("\n");
        var encodedUri = encodeURI(csvData);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "my_data_entries.csv");
        document.body.appendChild(link);
        link.click();
    }
    }

    return (
        <div className="dashboard-root">
                <div className="user-greeting">
                    Your Data Records
                    </div>
                    <button className="export" onClick={() => exportData()}>EXPORT ALL ENTRIES</button>
                
                <div className="data-display"> 
                {renderEntries()}
                </div>
        </div>
    )
}