import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { COLORS } from '../../style/constants';
import { Icon } from '../../assets/index'

const Card = ({ text }) => {

  return (
    <Wrapper>
      <p>{text}</p> 
      <StyledIcon id="plus" size={16}/>
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

const StyledIcon = styled(Icon)`
  color: hsla(240, 2%, 76%, 1);
`

export default Card