import styled from 'styled-components';
import { Icon } from '../assets';
import Status from '../components/Status';
import { formatDate } from '../helpers/timestamp'

const LongCard = () => {
  return (
    <CardWrapper>
      <Text>Grocery List</Text>
      <Wrapper>
        <StyledIcon id="calendar" size={18} />
        <DateText>{formatDate(new Date())}</DateText>
        <Status type="completed">Completed</Status>
        <Arrow>&gt;</Arrow>
      </Wrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  width: 800px;
  color: white;
  box-shadow: 0 2px 12px hsla(0, 0%, 0%, 0.05);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const DateText = styled.small`
  font-size: 12px;
  color: hsla(240, 2%, 76%, 1);
  margin-right: 34px;
`

const Arrow = styled.a`
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