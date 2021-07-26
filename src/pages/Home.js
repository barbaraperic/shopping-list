import styled from 'styled-components'
import { Route, useRouteMatch } from 'react-router-dom';
import { SearchInput } from '../components/Input';
import Navigation from '../containers/Navigation';
import { PreviewSidebar } from '../containers/Sidebar'
import { COLORS } from '../style/constants';

const Home = ({ className }) => {

  const { url } = useRouteMatch()
  return (
    <MainWrapper className={className}>
      <Navigation />
      <Wrapper>
        <MainTitle>
          Take your <span style={{ color: `${COLORS.primary}`}}>shopping list</span> whenever you go
        </MainTitle>
        <SearchInput />

        <Route path={`${url}/items`}>
          <p>list</p>
        </Route>
      </Wrapper>
      <PreviewSidebar />
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  display: flex;
`

const Wrapper = styled.div`
  padding: 30px;
  flex: 1;
`

const MainTitle = styled.h2`
  line-height: 1.3;
  font-weight: normal;
  font-size: 26px;
  flex: 1;
  margin-bottom: 40px;
`

export default Home;