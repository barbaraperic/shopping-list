import styled from 'styled-components';

export const TextAreaInput = ({ id, label, placeholder }) => {
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
`
const Label = styled.label`
  margin-bottom: 6px;
  font-size: 14px;
`
const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 20px 0;
  padding-left: 18px;
  border-radius: 12px;
  border: 2px solid hsla(0, 0%, 74%, 1);

  &::placeholder {
    color: hsla(0, 0%, 74%, 1);
    font-size: 14px;
  }
`
