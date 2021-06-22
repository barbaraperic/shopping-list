import styled from 'styled-components';

const SubHeader = ({ children }) => {
  return (
    <Header>{children}</Header>
  )
}

const Header = styled.h3`
  font-weight: normal;
  font-size: 24px;
  margin-bottom: 30px;
`

export default SubHeader