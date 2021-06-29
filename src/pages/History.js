import React, { useState } from 'react'
import styled from 'styled-components';
import Navigation from '../containers/Navigation'
import MainHistory from '../containers/MainHistory';
import { PreviewSidebar } from '../containers/Sidebar'

const Home = () => {
  return (
    <Wrapper>
      <Navigation />
      <MainHistory />
      <PreviewSidebar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const StyledMain = styled(MainHistory)`
  flex: 1;
`

export default Home