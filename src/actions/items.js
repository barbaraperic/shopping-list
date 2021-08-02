export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const SHOW_ITEM = 'SHOW_ITEM';

export const receiveItems = (items) => {
  return {
    type: RECEIVE_ITEMS,
    items
  }
}

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item
  }
}

export const showItem = (item) => {
  return {
    type: SHOW_ITEM,
    item
  }
}