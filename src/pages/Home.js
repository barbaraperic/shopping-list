import styled from 'styled-components';
import Main from '../containers/Main'
import SidebarLeft from '../containers/SidebarLeft'
import SidebarRight from '../containers/SidebarRight'

const Home = () => {
  return (
    <Wrapper>
      <SidebarRight />
      {/* <Main /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`

export default Home