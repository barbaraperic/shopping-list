import styled from 'styled-components';

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
  /* height: 62px;
  min-width: 87px; */
  border-radius: 12px;
  padding: 16px 24px;
  color: white;
  border: none;
  font-size: 16px;
`

const PrimaryButton = styled(ButtonBase)`
  background-color: #F9A109;
`
const SecondaryButton = styled(ButtonBase)`
  background-color: #56CCF2;
`
const WarningButton = styled(ButtonBase)`
  background-color: hsla(0, 79%, 63%, 1);
`
const GhostButton = styled(ButtonBase)`
  color: black;
  background-color: transparent;
`

export default Button;