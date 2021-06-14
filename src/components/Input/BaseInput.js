import styled from "styled-components";

export const BaseInput = ({ label, placeholder }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputText placeholder={placeholder} />
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

const InputText = styled.input`
  width: 300px;
  padding: 20px 0;
  padding-left: 18px;
  border-radius: 12px;
  border: 2px solid hsla(0, 0%, 74%, 1);

  &::placeholder {
    color: hsla(0, 0%, 74%, 1);
    font-size: 14px;
  }
`