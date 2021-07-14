import {
    CREATE_ENTRY_START,
    CREATE_ENTRY_SUCCESS,
    CREATE_ENTRY_FAILURE,
} from './actionTypes'

import initialState from './initialState'

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ENTRY_START:
            return { ...state}
        case CREATE_ENTRY_SUCCESS:
            return {...state, info:action.payload}
        case CREATE_ENTRY_FAILURE:
            return {...state, error:action.data}
        default:
            return state
    }
}