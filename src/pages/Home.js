import React, { useState } from 'react'
import styled from 'styled-components';
import Chart from '../components/Chart'

const Home = () => {

  return (
    <Wrapper>
      <Chart />
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