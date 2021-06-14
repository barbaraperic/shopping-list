import styled from "styled-components";
import { Icon } from '../../assets'

export const CategoryInput = ({ label }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper>
        <Input />
        <StyledIcon id="remove" size={16}/>
      </InputWrapper>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  position: relative;
`

const Label = styled.label`

`

const Input = styled.input`

`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  
`

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 0;
  margin-right: 6px;
`