
import * as types from '../constants/ActionTypes';


const initialState = {
    value: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        value: action.value
      }
    case types.DECREMENT:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}