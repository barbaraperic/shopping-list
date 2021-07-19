import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Link, Route, useRouteMatch, useParams } from 'react-router-dom'
import { COLORS } from '../../style/constants'
// import Cards from '../Cards';
// import { Card } from '../../components/Card';
import { Icon } from '../../assets';
import { SearchInput } from '../../components/Input';
import { _getItems } from '../../utils/_DATA';
import { Button } from '../../components/Button';
import { LinkBack } from '../../components/Text';
import SidebarWrapper from '../Sidebar/SidebarWrapper';
import Navigation from '../../containers/Navigation';


const Sidebar = ({ list }) => {
  const { id } = useParams();
  const item = list.find(item => item.name === id);

  return (
    <StyledSidebarWrapper>
      <LinkBack to="/"/>
          {/* <Image src={item.food.image} alt={`${item.food.label}`}/> */}
          <Title>name</Title>
          <h3>{item.name}</h3>
          <Title>category</Title>
          <p>Category</p>
          <Title>note</Title>
          <p>{item.note}</p>
          {/* <LongText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</LongText> */}
      <Footer>
        <Button variant="tertiary">delete</Button>
        <Button variant="primary">Add to list</Button>
      </Footer>
    </StyledSidebarWrapper>
  )
}

export const Cards = () => {

  return (
    <div style={{ display: 'flex'}}>
      <div>
        {list.map(item => (
          <Link key={item.name} to={`${url}/${item.name}`}>{item.name}</Link>
        ))}
      </div>
      
    </div>
  )
}


const Main = ({ className }) => {
  const [list, setList] = useState([])
  const { url, path } = useRouteMatch();

  useEffect(() => {
    _getItems().then(value => {
      setList(Object.values(value))
    })
  }, [])

  // console.log(location)
  return (
    <MainWrapper className={className}>
      <Navigation />
      <div>
        <MainTitle>
          Take your <span style={{ color: `${COLORS.primary}`}}>shopping list</span> whenever you go
        </MainTitle>
        <SearchInput />
        <Route path='/items'>
          {list.map(item => (
            <Link key={item.name} to={`${url}/${item.name}`}>{item.name}</Link>
          ))}
        </Route>
      </div>
      <Route path={`${path}/:id`}>
        {list.length > 0 && <Sidebar list={list}/>}
      </Route>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  margin-top: 40px;
  padding: 0 50px;
  display: flex;
`

const Wrapper = styled.div`
  margin-top: 60px;
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

// const CardWrapper = styled.div`
//   min-height: 50px;
//   width: 182px;
//   background-color: white;
//   border-radius: 12px;
//   box-shadow: 0 2px 12px hsla(0,0%,0%,.05);
//   border: 1px solid ${COLORS.gray700};
//   padding: 15px 17px;
//   margin-right: 16px;
//   margin-bottom: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-right: 20px;
//   cursor: pointer;
// `

// const StyledLink = styled(Link)`
//   line-height: 1.4;
//   font-size: 16px;
// `

const StyledSidebarWrapper = styled(SidebarWrapper)`
  background: white;
`;

// const StyledLink = styled(Link)`
//   color: hsla(38, 95%, 51%, 1);
//   font-size: 14px;
//   margin: 10px 0 20px 0;
// `

const Image = styled.img`
  height: 220px;
  width: 100%;
  border-radius: 25px;
`

const Title = styled.h4`
  font-weight: normal;
  color: hsla(0, 0%, 51%, 1);
  font-size: 12px;
  margin: 30px 0 10px 0;
`

const LongText = styled.p`
  line-height: 1.3;
  margin-bottom: 16px;
`

const Footer = styled.div`
  background-color: white;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export default Main;