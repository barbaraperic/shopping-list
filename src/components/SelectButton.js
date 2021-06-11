import styled from 'styled-components';
import { Icon } from '../assets'
 
const SelectButton = ({ children }) => {
  return (
    <Wrapper>
      <StyledIcon id="minus"/>
      <Button>{children}</Button>
      <StyledIcon id="plus"/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 6px 9px;
  display: flex;
  align-items: center;
`

const Button = styled.button`
  border: 1px solid hsla(38, 95%, 51%, 1);
  border-radius: 24px;
  background-color: transparent;
  color: hsla(38, 95%, 51%, 1);
  font-size: 12px;
  padding: 10px 20px;
  margin: 0 9px;
`

const StyledIcon = styled(Icon)`
  color: hsla(38, 95%, 51%, 1);
`

export default SelectButton;