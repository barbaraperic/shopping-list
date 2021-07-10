import styled from 'styled-components'
import { Link, Route, useRouteMatch, useLocation } from 'react-router-dom'
import { COLORS } from '../../style/constants'
import Cards from '../Cards';
import { Card } from '../../components/Card';
import { Icon } from '../../assets';
import { SearchInput } from '../../components/Input'

const fruits = ["Avocado", "Banana", "Carrots", "Watermelon"]

const protein = ["Chicken", "Pork", "Salmon"]

const beverages = ["Water", "Wine"]

const Main = ({ className }) => {
  const { url } = useRouteMatch();
  let location = useLocation();

  console.log(location)

  
  return (
    <MainWrapper className={className}>
      <Title>
        Take your <span style={{ color: `${COLORS.primary}`}}>shopping list</span> whenever you go
      </Title>
      <SearchInput />
      <Wrapper>
        <Header>Fruits and vegetables</Header>
        <Cards items={fruits} /> 
        <Header>Meat and fish</Header>
        <Cards items={protein} /> 
        <Header>Beverages</Header>
        <Cards items={beverages} /> 
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

const Title = styled.h2`
  line-height: 1.3;
  font-weight: normal;
  font-size: 26px;
  flex: 1;
  margin-bottom: 20px;
`

const Header = styled.h3`
  font-weight: normal;
  font-size: 18px;
  margin-top: 50px;
`

export default Main;