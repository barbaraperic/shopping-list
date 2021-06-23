import styled from 'styled-components';
import { COLORS } from '../../style/constants'; 

const TextAreaInput = ({ id, label, placeholder }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <TextArea id={id} placeholder={placeholder}></TextArea>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 20px 0;
  padding-left: 18px;
  border-radius: 12px;
  border: 2px solid hsla(0, 0%, 74%, 1);
  background-color: transparent;

  &::placeholder {
    color: hsla(0, 0%, 74%, 1);
    font-size: 14px;
  }

  &:focus {
    border: 2px solid ${COLORS.primary};
    outline-offset: 4px;
  }
`

const Label = styled.label`
  margin-bottom: 6px;
  font-size: 14px;

  ${TextArea}:active ~ & {
    color: ${COLORS.primary};
  }

`


export default TextAreaInput
