export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';

export const addListItem = (item) => {
  return {
    type: ADD_LIST_ITEM,
    item
  }
}

export const removeListItem = (item) => {
  return {
    type: REMOVE_LIST_ITEM,
    item
  }
}