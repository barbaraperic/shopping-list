import { ADD_ITEM, SHOW_ITEM } from '../actions/items';

export default function items ( state = {}, action ) {
  switch(action.type) {
    case ADD_ITEM:
      const { item } = action
      return {
        ...state,
        [action.item.name]: action.item
      }
    case SHOW_ITEM:
    return {
      item: action.item
    }
      default:
        return state;
  }
} 