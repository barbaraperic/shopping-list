import styled from 'styled-components';
import { COLORS } from '../../style/constants';
import SidebarWrapper from './SidebarWrapper';
import { Icon } from '../../assets/index'
import { AddItemCard } from '../../components/Card'
import { SaveInput } from '../../components/Input'
import { QuantityButton } from '../../components/Button'

const PreviewSidebar = ({ handleClick }) => {
  return (
    <StyledSidebarWrapper>
      <Header>
        <AddItemCard handleClick={handleClick}/>
        <Section>
          <TextWrapper>
            <MainTitle>Shopping List</MainTitle>
            <Icon id="edit" size={16}/>
          </TextWrapper>
          <FoodSection>
            <Title>Fruit and vegetables</Title>
            <TextWrapper>
              <p>Avocado</p>
              <QuantityButton id="edit">3 pcs</QuantityButton>
            </TextWrapper>
            <TextWrapper>
              <p>Avocado</p>
              <QuantityButton>3 pcs</QuantityButton>
            </TextWrapper>
            <Title>Meat and fish</Title>
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
      </Header>
      <Footer>
        <SaveInput />
      </Footer>
    </StyledSidebarWrapper>
  )
}

const StyledSidebarWrapper = styled(SidebarWrapper)`
  padding: 0;
`

const Header = styled.div`
  flex: 1;
  padding: 40px;
  background-color: ${COLORS.lightPrimary};
  max-height: calc(100vh - 130px);
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
  overflow: auto; 
  height: 200px;
`

const Footer = styled.section`
  height: 130px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`

const MainTitle = styled.h3`
  font-weight: normal;
  font-size: 24px;
`

const Title = styled.h4`
  font-weight: normal;
  color: hsla(0, 0%, 51%, 1);
  font-size: 12px;
  /* margin-top: 40px; */
  margin-bottom: 30px;
`

export default PreviewSidebar;