import React, { useState } from 'react'
import styled from 'styled-components';
import Navigation from '../containers/Navigation'
import Main from '../containers/Main'
import { AddItemSidebar, PreviewSidebar } from '../containers/Sidebar'

const Home = () => {
  const [ toggleSidebar, setToggleSidebar ] = useState(false);

  const handleClick = () => {
    setToggleSidebar(!toggleSidebar);
  }
  return (
    <Wrapper>
      <Navigation />
      <StyledMain />
      {toggleSidebar 
      ? <AddItemSidebar />
      : <PreviewSidebar handleClick={handleClick} />
      }
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