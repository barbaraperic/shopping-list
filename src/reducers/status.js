import { ADD_SIDEBAR, PREVIEW_SIDEBAR } from '../actions/status';

export default function status ( state = { status: 'preview' }, action ) {
  switch(action.type) {
    case ADD_SIDEBAR:
      const { status } = action
      return {
        ...state,
        [status]: action.status
      }
      default:
        return state;
  }
} 