import styled from 'styled-components';
import Main from '../containers/Main'
import SidebarLeft from '../containers/SidebarLeft'
import SidebarRight from '../containers/SidebarRight'

const Home = () => {
  return (
    <Wrapper>
      <SidebarLeft />
      <StyledMain />
      <SidebarRight />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  /* flex: 1; */
`

const StyledMain = styled(Main)`
  flex: 1;
`

export default Home