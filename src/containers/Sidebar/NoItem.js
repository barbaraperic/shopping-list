import styled from 'styled-components';
import { AddItemCard } from '../../components/Card'
import shoppingIllustration from '../../assets/illustrations/shopping.svg';
import { COLORS } from '../../style/constants'

const NoItemSidebar = () => {
  return (
    <Aside>
      <AddItemCard />
      <Wrapper>
        <Text>No item</Text>
      </Wrapper>
      <Image src={shoppingIllustration}/>
    </Aside>
  )
}

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${COLORS.lightPrimary};
  padding: 20px 40px;
  height: 100vh;
  width: 389px;
`

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.p`

`

const Image = styled.img`
  height: 200px;
`

export default NoItemSidebar;