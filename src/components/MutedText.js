import styled from 'styled-components';

const MutedText = ({ children }) => {
  return (
    <Header>{children}</Header>
  )
}

const Header = styled.h4`
  font-weight: normal;
  color: hsla(0, 0%, 51%, 1);
  font-size: 12px;
  margin-bottom: 30px;
`

export default MutedText