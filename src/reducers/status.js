import { ADD_STATUS } from '../actions/status';

export default function status ( state = { status: 'preview' }, action ) {
  switch(action.type) {
    case ADD_STATUS:
      const { status } = action
      return {
        status: action.status
      }
      default:
        return state;
  }
} 