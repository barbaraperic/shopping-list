import styled from 'styled-components';
import SidebarNav from '../containers/SidebarNav';
import SearchInput from '../components/SearchInput';

const Home = () => {
  return (
    <Wrapper>
      <SidebarNav />
      <SearchInput />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

export default Home