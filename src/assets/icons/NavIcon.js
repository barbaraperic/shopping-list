import { List, RotateCcw, BarChart2, ShoppingCart } from 'react-feather';
import styled from 'styled-components';

const icons = {
  list: List,
  rotate: RotateCcw,
  bar: BarChart2,
  cart: ShoppingCart
};

export const NavIcon = ({ id, className, children }) => {
  const Component = icons[id]

  if (!Component) {
    throw error(`No icon found for ID: ${id}`)
  }
  
  return (
    <Wrapper className={className}>
      {/* <Fiddle /> */}
      {children}
      <Component />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`








