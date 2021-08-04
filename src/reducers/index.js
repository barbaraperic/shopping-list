import { combineReducers } from "redux";
import items from './items'
import status from './status'
import list from './list'

export default combineReducers({
  items,
  status,
  list
})