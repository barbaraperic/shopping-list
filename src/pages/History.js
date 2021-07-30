import React, { useState } from 'react'
import styled from 'styled-components';
import Navigation from '../containers/Navigation'
import { MainPreview } from '../containers/MainHistory';
import { PreviewSidebar } from '../containers/Sidebar'

const Home = () => {
  
  return (
    <Wrapper>
      <StyledMain />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const StyledMain = styled(MainPreview)`
  flex: 1;
`

export default Home