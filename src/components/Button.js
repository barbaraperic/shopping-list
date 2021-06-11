import styled from 'styled-components';

const Button = ({ children, variant, className }) => {
  let Component;
  if (variant === 'primary') {
    Component = PrimaryButton
  } else if (variant === 'secondary') {
    Component = SecondaryButton
  } else if (variant === 'warning') {
    Component = WarningButton
  } else if (variant === 'select') {
    Component = SelectButton
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

const SelectButton = styled.button`
  border: 1px solid hsla(38, 95%, 51%, 1);
  border-radius: 24px;
  background-color: transparent;
  color: hsla(38, 95%, 51%, 1);
  font-size: 12px;
  padding: 10px 20px;
`

export default Button;