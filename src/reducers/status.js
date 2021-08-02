import { ADD_STATUS } from '../actions/status';

export default function status ( state = { status: 'preview' }, action ) {
  switch(action.type) {
    case ADD_STATE:
      const { status } = action
      return {
        ...state,
        [status]: action.status
      }
      default:
        return state;
  }
} 