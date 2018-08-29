
import { combineReducers } from 'redux'
import todos from './todo'

export default combineReducers({
  todos,
})

// const reducers = {
//   todos
// }

// const rootReducers = combineReducers(reducers);

// export default rootReducers