import {
    FETCH_USER_INFO_START,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAILURE,
    FETCH_USER_ENTRIES_START,
    FETCH_USER_ENTRIES_SUCCESS,
    FETCH_USER_ENTRIES_FAILURE,
} from './actionTypes'
import initialState from './initialState'

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_INFO_START:
            return {...state}
        case FETCH_USER_INFO_SUCCESS:
            return {...state, info: action.payload}
        case FETCH_USER_INFO_FAILURE:
            return {...state, errorMessage: action.payload}
        case FETCH_USER_ENTRIES_START:
            return {...state}
        case FETCH_USER_ENTRIES_SUCCESS:
            return {...state, entries: action.payload}
        case FETCH_USER_ENTRIES_FAILURE:
            return {...state, errorMessage: action.payload}
        default:
            return state
    }
}