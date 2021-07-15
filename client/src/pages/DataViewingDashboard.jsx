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
        //console.log(allEntries.length)
        if(allEntries!=null){
        if (allEntries.length!=0){
            return allEntries.map((entry, i) => {
                return <DataRecord entry={entry} key={i}/>
            })
        }
    }
        return <button/>
    }

    return (
        <div className="dashboard-root">
                <div className="user-greeting">
                    Your Data Records
                    </div>
                    <button className="export">EXPORT ALL ENTRIES</button>
                
                <div className="data-display"> 
                {renderEntries()}
                </div>
        </div>
    )
}