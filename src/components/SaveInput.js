import styled from 'styled-components';
import Button from '../components/Button'

const SaveInput = () => {
  return (
    <Wrapper>
      <Input placeholder="Enter a name"/>
      <StyledButton variant="primary">Save</StyledButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* width: 100%; */
  padding: 30px;
`

const Input = styled.input`
  width: 227px;
  height: 52px;
  border-radius: 12px;
  border: 2px solid #F9A109;
  padding-left: 18px;

  &::placeholder {
    color: hsla(0, 0%, 74%, 1);
    font-size: 14px;
  }
`

const StyledButton = styled(Button)`
  position: absolute;
  right: 49px;
  top: 31px;
`

export default SaveInput;