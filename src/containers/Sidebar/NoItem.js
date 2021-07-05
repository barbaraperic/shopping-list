import styled from 'styled-components';
import { AddItemCard } from '../../components/Card'
import { SaveInput } from '../../components/Input'
import shoppingIllustration from '../../assets/illustrations/shopping.svg';
import { COLORS } from '../../style/constants';
import SidebarWrapper from './SidebarWrapper';

const NoItemSidebar = () => {
  return (
    <StyledSidebarWrapper>
    <Header>
      <Wrapper>
        <AddItemCard />
        <Text>No items</Text>
      </Wrapper>
      <Image src={shoppingIllustration}/>
    </Header>
      <SectionBottom>
        <SaveInput type="disabled"/>
      </SectionBottom>
    </StyledSidebarWrapper>
  );
};

const StyledSidebarWrapper = styled(SidebarWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
`

const Header = styled.div`
  position: relative; 
  background-color: ${COLORS.lightPrimary};
  flex: 1;
`

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`

const Text = styled.p`
  font-weight: bold;
  margin-top: 120px;
`

const Image = styled.img`
  height: 200px;
  position: absolute;
  bottom: -16px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`

const SectionBottom = styled.section`
  height: 130px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default NoItemSidebar;