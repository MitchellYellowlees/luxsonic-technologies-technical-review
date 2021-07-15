import {
    CREATE_ENTRY_START,
    CREATE_ENTRY_SUCCESS,
    CREATE_ENTRY_FAILURE,
} from './actionTypes'

const axios = require('axios').default

//const url = 'http://localhost:5000/entries'
const url = process.env.SERVER_URI + '/entries'

export const createEntryStart = () => {
    return {
        type: CREATE_ENTRY_START,
    }
}

export const createEntrySuccess = (entry) => {
    return {
        type: CREATE_ENTRY_SUCCESS,
        data: entry.data.response,
    }
}

export const createEntryFailure = (err) => {
    return {
        type: CREATE_ENTRY_FAILURE,
        data: err,
    }
}

export const createEntryAsync = (entry) => {
    return (dispatch) => {
        dispatch(createEntryStart())
        axios.post(`${url}/create-entry`, {
            firstName: entry.firstName,
            lastName: entry.lastName,
            profession: entry.profession,
            date: entry.date,
            owner: entry.owner,
        })
        .then((entry) => {
            dispatch(createEntrySuccess(entry))
        })
        .catch((err) => {
            dispatch(createEntryFailure(err))
        })
    }
}