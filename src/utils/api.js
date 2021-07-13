import { _getItems } from './_DATA';

export function getInitialData() {
  return Promise.all([
    _getItems
  ]).then(([ items ]) => ({
    items
  }))
}