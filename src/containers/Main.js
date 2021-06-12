import styled from 'styled-components'
import { COLORS } from '../style/constants'
import Cards from '../containers/Cards';

const Main = () => {
  return (
    <MainWrapper>
      <Title><span style={{ color: `${COLORS.primary}`}}>Shoppingfy</span> allows you to take your <br /> shopping list whenever you go</Title>
      <Wrapper>
        <Header>Fruits and vegetables</Header>
        <Cards />
      </Wrapper>
    
    </MainWrapper>
  )
}

const MainWrapper = styled.main``

const Wrapper = styled.div`
  margin-top: 60px;
`

const Title = styled.h2`
  line-height: 1.3;
  font-weight: normal;
  font-size: 26px;
`

const Header = styled.h3`
  font-weight: normal;
  font-size: 18px;
`

export default Main