import React, { useState } from 'react'
import styled from 'styled-components';
import Navigation from '../containers/Navigation'
import Main from '../containers/Main'
import { DescriptionSidebar } from '../containers/Sidebar'

const HomeDescription = () => {
  return (
    <Wrapper>
      <Navigation />
      <StyledMain />
      <DescriptionSidebar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const StyledMain = styled(Main)`
  flex: 1;
`

export default HomeDescription