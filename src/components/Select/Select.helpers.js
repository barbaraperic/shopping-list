import React from 'react';

export function getDisplayedValue(value, children) {
  const childArray = React.Children.toArray(children)
  const selectChild = childArray.find(child => child.props.children === value)
  return selectChild.props.children
}