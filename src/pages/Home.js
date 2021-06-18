import styled from 'styled-components';
import Tabs from '../containers/Tabs';

const Home = () => {
  return (
    <Wrapper>
      < Tabs/>
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