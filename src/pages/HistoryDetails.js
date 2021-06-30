import React, { useState } from 'react'
import styled from 'styled-components';
import Navigation from '../containers/Navigation'
import { MainDetails } from '../containers/MainHistory';
import { PreviewSidebar } from '../containers/Sidebar'

const HistoryDetails = () => {
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

const StyledMain = styled(MainDetails)`
  flex: 1;
`

export default HistoryDetails