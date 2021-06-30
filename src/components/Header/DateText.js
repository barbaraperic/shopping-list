import styled from 'styled-components';
import { Icon } from '../../assets';
import { formatDate } from '../../helpers/timestamp'

const DateText = () => {
  return (
    <Wrapper>
      <StyledIcon id="calendar" size={18} />
      <Text>{formatDate(new Date())}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`

const Text = styled.small`
  font-size: 12px;
  color: hsla(240, 2%, 76%, 1);
  margin-right: 34px;
`

const StyledIcon = styled(Icon)`
  color: hsla(240, 2%, 76%, 1);
  margin-right: 10px;
`

export default DateText;