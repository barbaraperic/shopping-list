import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../style/constants';
import { SearchInput } from '../../components/Input';
import { _getItems } from '../../utils/_DATA';
import { Card } from '../../components/Card';
import { DescriptionSidebar } from '../Sidebar';

const Main = () => {
  const [description, setDescription] = useState(false)

  useEffect(() => {

  }, [])

  const list = ["banana", "mango", "avocado"];

  return (
    <MainWrapper >
      <div>np
        <MainTitle>
          Take your <span style={{ color: `${COLORS.primary}`}}>shopping list</span> whenever you go
        </MainTitle>
        <SearchInput />
        <CardWrapper>
          <div>
            <Header>Fruits and vegetables</Header>
            <Card text="Mango" handleClick={() => setDescription(true)}/>
          </div>
        </CardWrapper>
        {description 
          ? <DescriptionSidebar />
          : null}
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
  margin-bottom: 30px;
`

const CardWrapper = styled.div`
  margin-top: 40px;
`

export default Main;