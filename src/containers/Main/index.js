import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Switch, Link, Route, useRouteMatch, useLocation } from 'react-router-dom'
import { COLORS } from '../../style/constants'
// import Cards from '../Cards';
// import { Card } from '../../components/Card';
import { Icon } from '../../assets';
import { SearchInput } from '../../components/Input';
import { _getItems } from '../../utils/_DATA';


// const fruits = ["Avocado", "Banana", "Carrots", "Watermelon"]

const protein = ["Chicken", "Pork", "Salmon"]

const beverages = ["Water", "Wine"]

const Card = () => {
  const { itemId } = useParams();
  const { url, path } = useRouteMatch();

  return (
    <h2>Hey</h2>
  )
}

const Cards = () => {
  const [ list, setList ] = useState([]);

  useEffect(() => {
    _getItems().then((value) => {
      setList(Object.values(value))
    })
  },[])

  const { url, path } = useRouteMatch()
  return (
    <div>
      <ul>
        {list.map(({ name }) => (
          <li key={name}><Link to={`${url}/${name}`}>{name}</Link></li>
          
        ))}
      </ul>
      <Route path={`${path}/:itemId`}>
          <Card />
      </Route>

    </div>
  )
}

const Main = ({ className, list }) => {
  const { url } = useRouteMatch();
  let location = useLocation();
  console.log('url', url)

  // console.log(location)
  return (
    <MainWrapper className={className}>
      <Title>
        Take your <span style={{ color: `${COLORS.primary}`}}>shopping list</span> whenever you go
      </Title>
      <SearchInput />
      <Wrapper>
        {/* <Header>Fruits and vegetables</Header> */}
          <Link to="/items">Items</Link>
          {/* // <Card id={item} key={item.name}>
          //   <Icon id="plus" size={14} />
          // </Card> */}
      </Wrapper>
        <Route path="/items">
            <Cards />
        </Route>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  margin-top: 40px;
  padding: 0 50px;
`

const Wrapper = styled.div`
  margin-top: 60px;
`

const Title = styled.h2`
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

const CardWrapper = styled.div`
  min-height: 50px;
  width: 182px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px hsla(0,0%,0%,.05);
  border: 1px solid ${COLORS.gray700};
  padding: 15px 17px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  line-height: 1.4;
  font-size: 16px;
`

export default Main;