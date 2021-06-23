import styled from "styled-components";

const BaseInput = ({ label, placeholder, ...props }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputText placeholder={placeholder} {...props}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Label = styled.label`
  margin-bottom: 6px;
  font-size: 14px;
`

const InputText = styled.input`
  width: 300px;
  padding: 20px 0;
  padding-left: 18px;
  border-radius: 12px;
  border: 2px solid hsla(0, 0%, 74%, 1);
  background-color: transparent;

  &::placeholder {
    color: hsla(0, 0%, 74%, 1);
    font-size: 14px;
  }
`

export default BaseInput