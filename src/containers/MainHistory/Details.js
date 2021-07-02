import styled from 'styled-components'
import { useParams, useRouteMatch } from 'react-router-dom';

import Cards from '../Cards';
import { LinkBack, SubHeader, DateText } from '../../components/Text';
import { COLORS } from '../../style/constants';

const cookies = ["Doris Truffle", "Chocolate Cookie"];
const beverages = ["Beer", "Wine"];

const MainDetails = ({ className }) => {
  const { id } = useParams()
  console.log(useParams())

  const styleTitle = (string) => {
    const arr = string.split("-")
    return arr.join(' ')
  }

  return (
    <MainWrapper className={className}>
      <LinkBack to="/history" />
      <TopWrapper>
        <SubHeader>{styleTitle(id)}</SubHeader>
        <DateText />
      </TopWrapper>
      <Wrapper>
        <Text>Cookies</Text>
        <Cards items={cookies} />
        <Text>Beverages</Text>
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

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 42px;
`

const Text = styled.p`
  margin: 42px 0 16px 0;
  font-size: 18px;
`

const QuantityText = styled.span`
  color: ${COLORS.primary};
  font-size: 12px;
`

export default MainDetails;