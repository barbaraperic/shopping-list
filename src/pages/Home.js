import React, { useState } from 'react'
import styled from 'styled-components';
import Navigation from '../containers/Navigation'
import Main from '../containers/Main'
import { PreviewSidebar } from '../containers/Sidebar'


const Home = () => {
  return (
    <Wrapper>
      <Navigation />
      <StyledMain />
      <PreviewSidebar />
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