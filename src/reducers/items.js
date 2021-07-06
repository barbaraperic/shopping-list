import { ADD_ITEM } from '../actions/items';

export default function items ( state = {}, action ) {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        ...action.items
      }
      default:
        return state;
  }
} 