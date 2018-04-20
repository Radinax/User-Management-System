import { combineReducers } from 'redux'
import users from './users'
import groups from './groups'

const combineReducer = combineReducers({
  users,
  groups
})

export default combineReducer