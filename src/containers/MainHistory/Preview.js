import styled from 'styled-components'
import { useParams, useRouteMatch } from 'react-router-dom';
import { LongCard } from '../../components/Card';
import { SubHeader, MutedText } from '../../components/Text'

const MainPreview = ({ className }) => {

  console.log(useParams())
  console.log(useRouteMatch())
  return (
    <MainWrapper className={className}>
      <TopWrapper>
        <SubHeader>Shopping History</SubHeader>
      </TopWrapper>
      <Wrapper>
        <MutedText>August 2019</MutedText>
        <LongCard 
          text="Grocery List"
          type="completed"
          to="/"
        />
        <MutedText>August 2019</MutedText>
        <LongCard 
          text="Grocery List"
          type="canceled"
          to="/"
        />
        <MutedText>August 2019</MutedText>
        <LongCard 
          text="Grocery List"
          type="canceled"
          to="/"
        />
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

export default MainPreview;