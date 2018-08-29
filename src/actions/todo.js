import * as types from '../constants/ActionTypes';



export function plus(value = {}){
    return {
        type: types.INCREMENT,
        value: value
    }
    
}

export function reduce(value = {}){
    return {
        type: types.DECREMENT,
        value: value
    }
}