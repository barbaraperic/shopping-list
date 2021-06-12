import styled from 'styled-components';
import AddItemCard from '../components/AddItemCard'

const Home = () => {
  return (
    <Wrapper>
      <AddItemCard />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 40px;
`

export default Home