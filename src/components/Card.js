import styled from 'styled-components';
import { Icon } from '../assets';

const Card = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <StyledIcon id="plus" size={16}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 50px;
  width: 182px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px hsla(0,0%,0%,.05);
  padding: 15px 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  cursor: pointer;
`

const Text = styled.p`
  line-height: 1.4;
`

const StyledIcon = styled(Icon)`
  color: hsla(240, 2%, 76%, 1);
`

export default Card