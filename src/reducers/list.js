import { ADD_LIST_ITEM } from '../actions/list';

export default function list (state = {}, action) {
  switch(action.type) {
    case ADD_LIST_ITEM:
      return {
        ...state,
        item: action.item
      }
      default:
      return state;
  }
}