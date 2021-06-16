import styled from 'styled-components';
import { Icon } from '../../assets'
import { COLORS } from '../../style/constants'

const Checkbox = ({ className, checked, ...props}) => {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props}/>
      <StyledCheckbox checked={checked}>
        <StyledIcon id="check" size={18}/>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

const CheckboxContainer = styled.div``

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledIcon = styled(Icon)`
  color: ${COLORS.primary};

`

const StyledCheckbox = styled.div`
  height: 24px;
  width: 24px;
  border: 2px solid ${COLORS.primary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px ${COLORS.gray};
  }


  ${StyledIcon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }
`

export default Checkbox