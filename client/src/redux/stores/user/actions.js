import {
    FETCH_USER_INFO_START,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAILURE,
    FETCH_USER_ENTRIES_START,
    FETCH_USER_ENTRIES_SUCCESS,
    FETCH_USER_ENTRIES_FAILURE,
} from './actionTypes'

const axios = require('axios').default
//const url = process.env.SERVER_URI + '/users'

// Actions for fetching a user

export const fetchUserInfoStart = () => {
    return {
        type: FETCH_USER_INFO_START,
    }
}

export const fetchUserInfoSuccess = (info) => {
    return {
      type: FETCH_USER_INFO_SUCCESS,
      payload: info.data.response,
    }
  }

  export const fetchUserInfoFailure = (errorMessage) => {
    return {
      type: FETCH_USER_INFO_FAILURE,
      payload: errorMessage,
    }
  }
 
  export const fetchUserInfoAsync = (user) => {
      return (dispatch) => {
          dispatch(fetchUserInfoStart())
          //axios.get(`${url}/get-by-email/${user.email}`)
          axios.get(`http://localhost:5000/users/get-by-email/${user.email}`)
          .then((info) => {
              if (info.data.response) {
                  dispatch(fetchUserInfoSuccess(info))
              }
              else if (info.data.response === null) {
                  axios.post(`http://localhost:5000/users/create-user`, {
                      email: user.email,
                  })
                  .then((info) => dispatch(fetchUserInfoSuccess(info)))
                  .catch((err) => dispatch(fetchUserInfoFailure(err)))
              }
          })
          .catch((err) => dispatch(fetchUserInfoFailure(err)))
      }
  }

  // Actions for fetching a user's entries

  export const fetchUserEntriesStart = () => {
      return {
          type: FETCH_USER_ENTRIES_START,
      }
  }

  export const fetchUserEntriesSuccess = (entries) => {
      return {
          type: FETCH_USER_ENTRIES_SUCCESS,
          payload: entries.data.response,
      }
  }

  export const fetchUserEntriesFailure = (errorMessage) => {
      return {
          type: FETCH_USER_ENTRIES_FAILURE,
          payload: errorMessage,
      }
  }

  export const fetchUserEntriesAsync = (user_email) => {
      return (dispatch) => {
          dispatch(fetchUserEntriesStart())

          axios.get(`http://localhost:5000/users/get/entries-with-email/${user_email}`)
          .then((entries) => dispatch(fetchUserEntriesSuccess(entries)))
          .catch((err) => dispatch(fetchUserEntriesFailure(err)))
      }
  }