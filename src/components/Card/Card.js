import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../style/constants';

const Card = ({ text, children }) => {

  return (
    <Wrapper>
      <StyledLink to={`/${text}`}>{text}</StyledLink>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 50px;
  width: 182px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px hsla(0,0%,0%,.05);
  border: 1px solid ${COLORS.gray700};
  padding: 15px 17px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  line-height: 1.4;
  font-size: 16px;
`

export default Card