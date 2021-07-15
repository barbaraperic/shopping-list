import React, { useState, useEffect } from 'react';
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
  const [ list, setList ] = useState([]);
  const { items } = useSelector(state => state)

  const handleClick = () => {
    setToggleSidebar(!toggleSidebar);
  }

  useEffect(() => {
    _getItems().then((value) => {
      setList(Object.values(value))
    })
  },[])

  console.log('list', list)

  return (
    <Wrapper>
      <Navigation />
      <StyledMain list={list}/>
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