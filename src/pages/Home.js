import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import Navigation from '../containers/Navigation';
import Main from '../containers/Main';
import { addItem } from '../actions/items'
import { AddItemSidebar, PreviewSidebar } from '../containers/Sidebar';
import { dispatch } from 'react-redux';

const Home = () => {
  const [ toggleSidebar, setToggleSidebar ] = useState(false);
  const [newItem, setNewItem] = useState({})

  const handleClick = () => {
    setToggleSidebar(!toggleSidebar);
  }
  
  console.log('>>>',newItem)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('>>',newItem)
  }

  return (
    <Wrapper>
      <Navigation />
      <StyledMain />
      <AddItemSidebar newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      {/* {toggleSidebar 
      ? <AddItemSidebar />
      : <PreviewSidebar handleClick={handleClick} />
      } */}
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