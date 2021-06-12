import styled from 'styled-components';
import Main from '../containers/Main'

const Home = () => {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 40px;
`

export default Home