import styled from 'styled-components';
import SidebarNav from '../containers/SidebarNav';
import SearchInput from '../components/SearchInput';
import Card from '../components/Card'
import SelectButton from '../components/SelectButton'

const Home = () => {
  return (
    <Wrapper>
      <SelectButton>1 pcs</SelectButton>
      {/* <SaveInput /> */}
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