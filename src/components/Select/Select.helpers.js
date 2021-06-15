import React from 'react';

export function getDisplayedValue(value, children) {
  const childArray = React.Children.toArray(children)
  console.log(childArray)
  const selectChild = childArray.find(child => child.props.children === value)
  console.log(selectChild)
  return selectChild.props.children
}