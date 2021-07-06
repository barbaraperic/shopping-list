import React, { useState } from 'react'
import styled from 'styled-components';
import Navigation from '../containers/Navigation'
import Main from '../containers/Main'
import { AddItemSidebar, PreviewSidebar } from '../containers/Sidebar'

const API_KEY = `${process.env.REACT_APP_API_KEY}`
const API_ID = `${process.env.REACT_APP_API_ID}`
const ITEM = 'avocado';

fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${API_ID}&app_key=${API_KEY}&ingr=${ITEM}&nutrition-type=cooking
`)
  .then(response => response.json())
  .then(data => console.log(data))

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