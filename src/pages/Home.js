import { useState } from 'react'
import styled from 'styled-components';
// import Main from '../containers/Main';
// import SidebarLeft from '../containers/SidebarLeft'
// import SidebarRight from '../containers/SidebarRight'
// import SaveInput from '../components/SaveInput'
// import EditItemSidebar from '../containers/SidebarStats'
import ProgressBar from '../components/ProgressBar'


const Home = () => {
  return (
    <Wrapper>
      <ProgressBar value={60} variant="category"/>
      {/* <EditItemSidebar /> */}
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