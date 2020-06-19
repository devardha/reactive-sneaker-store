import {GET_ERROR, CLEAR_ERROR} from '../actions/types'

export const returnError = (msg, status, id = null) => {
    return {
        type: GET_ERROR,
        payload: { 
            msg, 
            status, 
            id
        }
    }
}

export const clearError = () => {
    return{
        type: CLEAR_ERROR
    }
}