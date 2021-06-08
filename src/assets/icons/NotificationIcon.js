import { ShoppingCart } from 'react-feather';
import styled from 'styled-components'

export const NotificationIcon = () => {
  
  return (
    <Wrapper>
      <Notification>2</Notification>
      <ShoppingCart />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F9A109;
  width: 42px;
  height: 42px;
  color: white;
  border-radius: 50%;
  margin-bottom: 34px;
  position: relative;
`

const Notification = styled.span`
  font-size: 12px;
  color: white;
  background-color: #EB5757;
  border-radius: 4px;
  padding: 6px;
  position: absolute;
  top: -8px;
  right: -4px;
`