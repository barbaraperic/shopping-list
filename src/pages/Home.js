import styled from 'styled-components';
// import Main from '../containers/Main';
// import SidebarLeft from '../containers/SidebarLeft'
// import SidebarRight from '../containers/SidebarRight'
// import SaveInput from '../components/SaveInput'
import { CategoryInput } from '../components/Input/index';

const Home = () => {
  return (
    <Wrapper>
      <CategoryInput />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 50px;
`

// const StyledMain = styled(Main)`
//   flex: 1;
// `

export default Home