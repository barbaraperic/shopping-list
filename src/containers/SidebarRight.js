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
      <Section>
        <TextWrapper>
          <Title>Shopping List</Title>
          <Icon id="edit" size={16}/>
        </TextWrapper>
        <FoodSection>
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
          <TextWrapper>
            <p>Avocado</p>
            <SelectButton>3 pcs</SelectButton>
          </TextWrapper>
        </FoodSection>
      </Section>
    </Wrapper>
    <SaveInput />
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Wrapper = styled.div`
  background-color: ${COLORS.lightPrimary};
  padding: 20px;
  flex: 1;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 40px 0;
`

const Section = styled.div`

`

const FoodSection = styled.div`
  overflow: scroll;
  max-height: 350px;
`

const Title = styled.h3`
  font-weight: normal;
  font-size: 24px;
`

const Header = styled.h4`
  font-weight: normal;
  color: hsla(0, 0%, 51%, 1);
  font-size: 12px;
  /* margin-top: 40px; */
  margin-bottom: 30px;
`

export default SidebarRight;