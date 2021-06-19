import styled from 'styled-components';
import { NoItemSidebar } from '../containers/Sidebar'

const Home = () => {
  return (
    <Wrapper>
      < NoItemSidebar/>
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