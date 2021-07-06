import styled from 'styled-components'
import { COLORS } from '../../style/constants'
import Cards from '../Cards';
import { Icon } from '../../assets';
import { SearchInput } from '../../components/Input'

const fruits = ["Avocado", "Banana", "Carrots", "Watermelon"]

const meatAndFish = ["Chicken", "Pork", "Salmon"]

const beverages = ["Water", "Wine"]

const Main = ({ className }) => {
  return (
    <MainWrapper className={className}>
      <TopWrapper>
        <Title>
          Take your <span style={{ color: `${COLORS.primary}`}}>shopping list</span> <br />  whenever you go
        </Title>
        <SearchInput />
      </TopWrapper>
      <Wrapper>
        <Header>Fruits and vegetables</Header>
        <Cards items={fruits}>
          <Icon id="plus" size={16}/>
        </Cards>
        <Header>Beverages</Header>
        <Cards items={beverages}>
          <Icon id="plus" size={16}/>
        </Cards>
        <Header>Meat and fish</Header>
        <Cards items={meatAndFish}>
          <Icon id="plus" size={16}/>
        </Cards>
      </Wrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  margin-top: 40px;
  padding: 0 50px;
`

const Wrapper = styled.div`
  margin-top: 60px;
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  line-height: 1.3;
  font-weight: normal;
  font-size: 26px;
  flex: 1;
`

const Header = styled.h3`
  font-weight: normal;
  font-size: 18px;
  margin-top: 50px;
`

export default Main;