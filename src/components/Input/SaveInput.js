import styled from 'styled-components';
import { COLORS } from '../../style/constants'
import { Button } from '../Button';

const SaveInput = ({ type }) => {
  return (
    <Wrapper>
      {type === 'disabled' ? 
      <>
        <DisabledInput placeholder="Enter a name"/>
        <StyledButton variant="disabled">Save</StyledButton>
      </>
      :
      <>
        <Input placeholder="Enter a name"/>
        <StyledButton variant="primary">Save</StyledButton>
      </>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0 16px;
`

const BaseInput = styled.input`
  min-width: 300px;
  height: 52px;
  border-radius: 12px;
  padding-left: 18px;
  outline-offset: 4px;

  &::placeholder {
    color: hsla(0, 0%, 74%, 1);
    font-size: 14px;
  }
`

const DisabledInput = styled(BaseInput)`
  border: 2px solid ${COLORS.gray700};
`

const Input = styled(BaseInput)`
  border: 2px solid ${COLORS.primary};
`

const StyledButton = styled(Button)`
  position: absolute;
  right: 15px;
  margin: auto 0;
`

SaveInput.defaultProps = {
  type: ''
}

export default SaveInput