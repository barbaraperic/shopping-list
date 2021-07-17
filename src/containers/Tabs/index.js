import styled from 'styled-components';
import { BrowserRouter as Router, NavLink, Route, useRouteMatch, useParams } from 'react-router-dom'
import { NavIcon } from '../../assets';
import { navListItems } from '../../mock-api';
import { COLORS } from '../../style/constants';
import { Cards } from '../../containers/Main';

// export const navListItems = [
//   {
//     to: '/items',
//     iconId: 'list',
//     text: 'items'
//   },
//   { 
//     to: '/history',
//     iconId: 'rotate',
//     text: 'history'
//   },
//   { 
//     to: '/statistics',
//     iconId: 'bar',
//     text: 'statistics'
//   }
// ]

const TabItem = ({ item }) => {

  return (
    <Tab>
      <StyledNavLink
        exact={true}
        to={item.to}
        activeClassName="active"
      >
        <StyledIcon id={item.iconId} >
          <Fiddle />
        </StyledIcon>
      </StyledNavLink>
      <Tooltip text={item.text}/>
    </Tab>
  )
}

const Tooltip = ({ className, text }) => {
  return (
    <TooltipWrapper className={className}>{text}</TooltipWrapper>
  )
}

const Tabs = () => {

  return (
    <TabButtons>
      {navListItems.map((item, index) => (
        <TabItem 
          key={item.text}
          item={item}
        />
      ))}
    </TabButtons>
  )
}

const TabButtons = styled.ul`
  width: 100%;
`

const TooltipWrapper = styled.span`
  visibility: hidden;
  position: absolute;
  color: white;
  font-size: 12px;
  background-color: #454545;
  padding: 4px 10px 4px 8px;
  left: 102px;
  border-radius: 4px;

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    top: 125%;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: #454545;
    border-left: 0;
    margin-top: -20px;
    margin-left: -5px;
    z-index: 9999999;
  }
`

const Tab = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  margin-bottom: 45px;

  &.active {
    background-color: yellow;
  }
`

const StyledIcon = styled(NavIcon)`
  /* position: relative; */

`

const StyledNavLink = styled(NavLink)``

const Fiddle = styled.div`
  height: 100%;
  width: 4px;
  position: absolute;
  left: -35px;
  background-color: ${COLORS.primary100};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  visibility: hidden;

  ${Tab}:hover & {
    visibility: visible;
  }

  ${StyledNavLink}.active & {
    visibility: visible;
    background-color: ${COLORS.primary};
  }
`

export default Tabs;