export const ADD_STATUS = 'ADD_STATUS';

export const addStatus = (status) => {
  return {
    type: ADD_STATUS,
    status
  }
}