import styled from 'styled-components';
import { COLORS } from '../../style/constants';
import { Icon } from '../../assets/index'
import { AddItemCard } from '../../components/Card'
import { SaveInput } from '../../components/Input'
import { QuantityButton } from '../../components/Button'

const PreviewSidebar = () => {
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
            <QuantityButton id="edit">3 pcs</QuantityButton>
          </TextWrapper>
          <TextWrapper>
            <p>Avocado</p>
            <QuantityButton>3 pcs</QuantityButton>
          </TextWrapper>
          <Header>Meat and fish</Header>
          <TextWrapper>
            <p>Avocado</p>
            <QuantityButton>3 pcs</QuantityButton>
          </TextWrapper>
          <TextWrapper>
            <p>Avocado</p>
            <QuantityButton>3 pcs</QuantityButton>
          </TextWrapper>
          <TextWrapper>
            <p>Avocado</p>
            <QuantityButton>3 pcs</QuantityButton>
          </TextWrapper>
        </FoodSection>
      </Section>
    </Wrapper>
    <SectionBottom>
      <SaveInput />
    </SectionBottom>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.section`
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

const SectionBottom = styled.section`
  height: 130px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default PreviewSidebar;