import React, { useState } from 'react'
import styled from 'styled-components';
import Navigation from '../containers/Navigation'
import Main from '../containers/Main'
import { AddItemSidebar } from '../containers/Sidebar'


const Home = () => {
  return (
    <Wrapper>
      <Navigation />
      <StyledMain />
      <AddItemSidebar />
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