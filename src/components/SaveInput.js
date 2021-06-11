import styled from 'styled-components';
import Button from '../components/Button'

const SaveInput = () => {
  return (
    <Wrapper>
      <Input />
      <StyledButton variant="primary">Save</StyledButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  width: 309px;
  height: 52px;
  border-radius: 12px;
  border: 2px solid #F9A109;
`

const StyledButton = styled(Button)`
  position: absolute;
  right: 0px;
`

export default SaveInput;