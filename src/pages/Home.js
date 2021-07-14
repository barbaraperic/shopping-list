import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import Navigation from '../containers/Navigation';
import Main from '../containers/Main';
import { addItem } from '../actions/items'
import { AddItemSidebar, PreviewSidebar } from '../containers/Sidebar';
import { useSelector } from 'react-redux';
import { _getItems } from '../utils/_DATA';

const Home = () => {
  const [ toggleSidebar, setToggleSidebar ] = useState(false);
  const { items } = useSelector(state => state)

  console.log('>>', Object.keys(items))

  const handleClick = () => {
    setToggleSidebar(!toggleSidebar);
  }

  _getItems().then(value => console.log('v', value))


  return (
    <Wrapper>
      <Navigation />
      <StyledMain />
      <AddItemSidebar />
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