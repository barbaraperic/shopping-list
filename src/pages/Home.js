import styled from 'styled-components';
import Main from '../containers/Main'
import SidebarLeft from '../containers/SidebarLeft'
import SidebarRight from '../containers/SidebarRight'
import SaveInput from '../components/SaveInput'

const Home = () => {
  return (
    <Wrapper>
      {/* <SaveInput /> */}
      <SidebarLeft />
      <StyledMain />
      <SidebarRight />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const StyledMain = styled(Main)`
  flex: 1;
`

export default Home