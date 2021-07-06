import styled from 'styled-components';
import { COLORS } from '../../style/constants'

const Card = ({ text, children, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Text>{text}</Text>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  min-height: 50px;
  width: 182px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px hsla(0,0%,0%,.05);
  border: 1px solid ${COLORS.gray700};
  padding: 15px 17px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  cursor: pointer;
`

const Text = styled.p`
  line-height: 1.4;
  font-size: 16px;
`

export default Card