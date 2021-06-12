import styled from 'styled-components';
import { COLORS } from '../style/constants';
import { Icon } from '../assets/index'
import AddItemCard from '../components/AddItemCard'
import SaveInput from '../components/SaveInput'
import SelectButton from '../components/SelectButton'

const SidebarRight = () => {
  return (
    <SidebarWrapper>
    <Wrapper>
      <AddItemCard />
      <TextWrapper>
        <Title>Shopping List</Title>
        <Icon id="edit" size={16}/>
      </TextWrapper>
      <Header>Fruit and vegetables</Header>
      <TextWrapper>
        <p>Avocado</p>
        <SelectButton>3 pcs</SelectButton>
      </TextWrapper>
      <TextWrapper>
        <p>Avocado</p>
        <SelectButton>3 pcs</SelectButton>
      </TextWrapper>
      <Header>Meat and fish</Header>
      <TextWrapper>
        <p>Avocado</p>
        <SelectButton>3 pcs</SelectButton>
      </TextWrapper>
      <TextWrapper>
        <p>Avocado</p>
        <SelectButton>3 pcs</SelectButton>
      </TextWrapper>
    </Wrapper>
    <SaveInput />
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  height: 100vh;
`

const Wrapper = styled.div`
  background-color: ${COLORS.lightPrimary};
  padding: 40px;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 40px;
`

const Title = styled.h3`
  font-weight: normal;
  font-size: 24px;
`

const Header = styled.h4`
  font-weight: normal;
  color: hsla(0, 0%, 51%, 1);
  font-size: 12px;
  margin-top: 40px;
  margin-bottom: 30px;
`

export default SidebarRight;