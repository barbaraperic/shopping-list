import styled from 'styled-components'
import { COLORS } from '../style/constants'
import Cards from '../containers/Cards';
import SearchInput from '../components/SearchInput'

const fruits = ["Avocado", "Banana", "Bunch of carrots", "Watermelon"]

const meatAndFish = ["Chicken", "Pork", "Salmon"]

const beverages = ["Water", "Wine"]

const Main = ({ className }) => {
  return (
    <MainWrapper className={className}>
      <TopWrapper>
        <Title><span style={{ color: `${COLORS.primary}`}}>Shoppingfy</span> allows you to take your <br /> shopping list whenever you go</Title>
        <SearchInput />
      </TopWrapper>
      <Wrapper>
        <Header>Fruits and vegetables</Header>
        <Cards items={fruits} />
        <Header>Beverages</Header>
        <Cards items={beverages} />
        <Header>Meat and fish</Header>
        <Cards items={meatAndFish} />
      </Wrapper>
    
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  margin-top: 40px;
  padding: 0 30px;
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

export default Main