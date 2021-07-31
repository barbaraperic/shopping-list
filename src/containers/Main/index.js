import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../style/constants';
import { SearchInput } from '../../components/Input';
import { _getItems } from '../../utils/_DATA';
import { Card } from '../../components/Card'

const Main = () => {


  useEffect(() => {

  }, [])

  const list = ["banana", "mango", "avocado"]
  return (
    <MainWrapper >
      <div>
        <MainTitle>
          Take your <span style={{ color: `${COLORS.primary}`}}>shopping list</span> whenever you go
        </MainTitle>
        <SearchInput />
        <Card text="Mango" />
            
        {/* {list.map(item => (
          <Link
          key={item}
          to={`/${item}`}
        >
          {item.toUpperCase()}
        </Link> */}
      </div>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  margin-top: 40px;
  padding: 0 50px;
  display: flex;
`

const MainTitle = styled.h2`
  line-height: 1.3;
  font-weight: normal;
  font-size: 26px;
  flex: 1;
  margin-bottom: 20px;
`

const Header = styled.h3`
  font-weight: normal;
  font-size: 18px;
  margin-top: 50px;
`

export default Main;