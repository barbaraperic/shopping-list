import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom';
import slugify from 'slugify'
import { LongCard } from '../../components/Card';
import { SubHeader, MutedText } from '../../components/Text'
import { shoppingHistory } from '../../mock-api'

const MainPreview = ({ className }) => {
  const { url } = useRouteMatch();

  return (
    <MainWrapper className={className}>
      <TopWrapper>
        <SubHeader>Shopping History</SubHeader>
      </TopWrapper>
      <Wrapper>
        <MutedText>August 2019</MutedText>
        {shoppingHistory.map(article => (
          <LongCard
            key={article.title}
            text={article.title}
            type={article.type}
            to={`${url}/${slugify(article.title)}`}
          />
        ))}
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