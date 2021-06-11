import styled from 'styled-components';
import SidebarNav from '../containers/SidebarNav';
import SearchInput from '../components/SearchInput';
import Card from '../components/Card'
import SaveInput from '../components/SaveInput'

const Home = () => {
  return (
    <Wrapper>
      <SaveInput />
      {/* <Card /> */}
      {/* <SidebarNav />
      <SearchInput /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

export default Home