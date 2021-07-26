import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { SearchInput } from '../components/Input';
import Navigation from '../containers/Navigation';
import { COLORS } from '../style/constants';

const Home = ({ className }) => {

  return (
    <MainWrapper className={className}>
      <Navigation />
      <Wrapper>
        <MainTitle>
          Take your <span style={{ color: `${COLORS.primary}`}}>shopping list</span> whenever you go
        </MainTitle>
        <SearchInput />
        
      </Wrapper>
      {/* <Route path={`${location.pathname}`}>
        {list.length > 0 && <Sidebar list={list}/>}
      </Route> */}
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  display: flex;
`

const Wrapper = styled.div`
  padding: 30px;
`

const MainTitle = styled.h2`
  line-height: 1.3;
  font-weight: normal;
  font-size: 26px;
  flex: 1;
  margin-bottom: 40px;
`

export default Home;