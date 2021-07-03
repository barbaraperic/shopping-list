import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '../../assets';
import { StatusButton } from '../../components/Button';
import { DateText } from '../Text'

const LongCard = ({text, type, to}) => {
  return (
    <CardWrapper>
      <Text>{text}</Text>
      <Wrapper>
        <DateText />
        <StatusButton type={type}>{type}</StatusButton>
        <Arrow to={to}>&gt;</Arrow>
      </Wrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  color: white;
  box-shadow: 0 2px 12px hsla(0, 0%, 0%, 0.05);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 40px;
`

const Text = styled.span`
  color: black;
  font-size: 16px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`

// const DateText = styled.small`
//   font-size: 12px;
//   color: hsla(240, 2%, 76%, 1);
//   margin-right: 34px;
// `

const Arrow = styled(Link)`
 color: #F9A109;
 font-size: 18px;
 font-weight: bold;
 cursor: pointer;
 margin-left: 26px;
`

const StyledIcon = styled(Icon)`
  color: hsla(240, 2%, 76%, 1);
  margin-right: 10px;
`

export default LongCard;