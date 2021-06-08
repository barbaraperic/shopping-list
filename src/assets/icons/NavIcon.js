import { List, RotateCcw, BarChart2, ShoppingCart } from 'react-feather';
import styled from 'styled-components';

const icons = {
  list: List,
  rotate: RotateCcw,
  bar: BarChart2,
  cart: ShoppingCart
};

export const NavIcon = ({ id, className }) => {
  const Component = icons[id]

  if (!Component) {
    throw error(`No icon found for ID: ${id}`)
  }
  
  return (
    <Wrapper className={className}>
      <Fiddle />
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
`

const Fiddle = styled.div`
  height: 100%;
  width: 4px;
  position: absolute;
  left: 0;
  background-color: #F9A109;
  border-top-right-radius: 6px;
  border-bottom-right-radius:6px;
`
