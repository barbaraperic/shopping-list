import styled from 'styled-components';
import { Icon } from '../assets'
 
const SelectButton = ({ children }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <StyledTrashIcon id="trash" size={14}/>
      </IconWrapper>
      <StyledIcon id="minus" size={14}/>
      <Button>{children}</Button>
      <StyledIcon id="plus" size={14}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding-right: 9px;
`

const Button = styled.button`
  border: 2px solid hsla(38, 95%, 51%, 1);
  border-radius: 24px;
  background-color: transparent;
  color: hsla(38, 95%, 51%, 1);
  font-size: 12px;
  padding: 6px 16px;
  margin: 3px 9px;
`

const IconWrapper = styled.div`
  background-color: hsla(38, 95%, 51%, 1);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  border-radius: 12px;
  margin-right: 12px;
`

const StyledTrashIcon = styled(Icon)`
  color: white;
  font-size: 2px;
`

const StyledIcon = styled(Icon)`
  color: hsla(38, 95%, 51%, 1);
`

export default SelectButton;