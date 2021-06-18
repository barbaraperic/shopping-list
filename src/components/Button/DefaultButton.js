import styled from 'styled-components';
import { COLORS } from '../../style/constants';

const Button = ({ children, variant, className }) => {

  let Component;
  if (variant === 'primary') {
    Component = PrimaryButton
  } else if (variant === 'secondary') {
    Component = SecondaryButton
  } else if (variant === 'tertiary'){
    Component = TertiaryButton
  } else if (variant === 'warning') {
    Component = WarningButton
  } else if (variant === 'ghost') {
    Component = GhostButton
  } else {
    Component = PrimaryButton
  }
  return (
    <Component 
      className={className}
    >
      {children}
    </Component>
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

const TertiaryButton = styled(ButtonBase)`
  color: black;
  background-color: transparent;
`

const GhostButton = styled(ButtonBase)`
  width: 76px;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color);
  background-color: transparent;
  border: 1px solid var(--color);
`

export default Button;