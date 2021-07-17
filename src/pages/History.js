import React, { useState } from 'react'
import styled from 'styled-components';
import Navigation from '../containers/Navigation'
import { MainPreview } from '../containers/MainHistory';
import { PreviewSidebar } from '../containers/Sidebar'

const Home = () => {

  const url = "https://api.github.com/users/barbaraperic";

  fetch(url).then((data) => data.json()).then(data => console.log(data))

  const formElement = document.getElementById('result');
  console.log('>>',formElement)

  return (
    <Wrapper>
      {/* <Navigation />
      <StyledMain />
      <PreviewSidebar /> */}

    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

// const StyledMain = styled(MainPreview)`
//   flex: 1;
// `

export default Home