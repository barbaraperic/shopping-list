import { ShoppingCart } from 'react-feather';
import styled from 'styled-components'

const NotificationIcon = ({ className }) => {
  
  return (
    <Wrapper className={className}>
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
`

export default NotificationIcon;
