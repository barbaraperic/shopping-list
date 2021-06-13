import styled from 'styled-components';
import Button from '../components/Button';
import { COLORS } from '../style/constants'

const AddItemCard = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>Didn't find what you need?</Text>
        <StyledButton variant="ghost">Add item</StyledButton>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 130px;
  background-color: ${COLORS.brown};
  border-radius: 24px;
  display: flex;
  position: relative;
  display: flex;
  justify-content: flex-end;
`

const Text = styled.p`
  color: white;
  font-size: 16px;
  line-height: 1.2;
`

const Icon = styled.img`
  position: absolute;
  left: 10px;
  top: -20px;
  z-index: 3;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 180px;
`

const StyledButton = styled(Button)`
  background-color: white;
  padding: 11px 30px;
  margin-top: 14px;
`

export default AddItemCard;