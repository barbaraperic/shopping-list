import styled from 'styled-components';
import { Link } from 'react-router-dom'

const LinkBack = ({ to }) => {
  return (
    <StyledLink to={to}>&larr; back</StyledLink>
  )
}

const StyledLink = styled(Link)`
  color: hsla(38, 95%, 51%, 1);
  font-size: 14px;
  margin: 10px 0 20px 0;
`

export default LinkBack;