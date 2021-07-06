import styled from 'styled-components';
import Button from '../Button/DefaultButton';
import { COLORS } from '../../style/constants'

const AddItemCard = ({ handleClick }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>Didn't find what you need?</Text>
        <StyledButton variant="tertiary" onClick={handleClick}>Add item</StyledButton>
      </TextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 130px;
  width: 100%;
  background-color: ${COLORS.brown};
  border-radius: 24px;
  display: flex;
  justify-content: center;
  margin: 0px auto;
`

const Text = styled.p`
  color: white;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
`

const StyledButton = styled(Button)`
  background-color: white;
  padding: 11px 30px;
  margin-top: 14px;
`

export default AddItemCard;