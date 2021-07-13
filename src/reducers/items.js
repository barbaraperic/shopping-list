import { ADD_ITEM } from '../actions/items';

export default function items ( state = {}, action ) {
  switch(action.type) {
    case ADD_ITEM:
      const { item } = action
      return {
        ...state,
        [action.item.name]: action.item
      }
      default:
        return state;
  }
} 