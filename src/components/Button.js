import styled from 'styled-components';
import { COLORS } from '../style/constants'

const Button = ({ children, variant, className }) => {
  let Component;
  if (variant === 'primary') {
    Component = PrimaryButton
  } else if (variant === 'secondary') {
    Component = SecondaryButton
  } else if (variant === 'warning') {
    Component = WarningButton
  } else {
    Component = GhostButton
  }
  return (
    <Component className={className}>{children}</Component>
  )
}

const ButtonBase = styled.button`
  border-radius: 12px;
  padding: 16px 24px;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`

const PrimaryButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
`

const SecondaryButton = styled(ButtonBase)`
  background-color: ${COLORS.blue};
`

const WarningButton = styled(ButtonBase)`
  background-color: ${COLORS.red};
`

const GhostButton = styled(ButtonBase)`
  color: black;
  background-color: transparent;
`

export default Button;