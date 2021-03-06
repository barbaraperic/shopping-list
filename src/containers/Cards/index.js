import styled from 'styled-components'
import { Switch, Route, useLocation, useRouteMatch } from 'react-router-dom';
import { Card }from '../../components/Card';
import { Icon } from '../../assets';

// const CustomLink = ({ to, children }) => {
//   const match = useRouteMatch(to.pathname)

//   console.log(match)

//   return (
//     <li>
//       <Link to={to}>{children}</Link>
//     </li>
//   )
// }

const Cards = ({ items }) => {
  
  const { url } = useRouteMatch()

  return (
    <Wrapper>
      {Object.keys(items).map(item => (
        <Card text={item} key={item}>
          <Icon id="plus" size={14} />
        </Card>
      ))}
       <Switch>
      <Route path={`${url}/:cardId`}>
        <Card />
      </Route>
      {/* <Route path="*">
        <div className="sidebar-instruction">Select a team</div>
      </Route> */}
    </Switch>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
`

const StyledIcon = styled(Icon)`
  color: hsla(240, 2%, 76%, 1);
`

export default Cards