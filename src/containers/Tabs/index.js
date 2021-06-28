import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { NavIcon } from '../../assets';

const Tabs = () => {
  return (
    <List>
      <ListItem>
        <StyledLink to="/">
          <StyledIcon id="list" />
        </StyledLink>
        <Tooltip text="items" />
      </ListItem>
      <Spacer />
      <ListItem>
        <Link to="/history">
          <StyledIcon id="rotate"/>
        </Link>
        <Tooltip text="history" />
      </ListItem>
      <Spacer />
      <ListItem>
        <Link to="/statistics">
          <StyledIcon id="bar"/>
        </Link>
        <Tooltip text="statistics" />
      </ListItem>
    </List>
  )
}

const Tooltip = ({ className, text }) => {
  return (
    <TooltipWrapper className={className}>{text}</TooltipWrapper>
  )
}

const List = styled.ul`
  width: 100%;
`

const ListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledLink = styled(Link)`
  position: relative;
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
  }
`

const StyledIcon = styled(NavIcon)`
  /* position: relative; */

  &:hover + ${TooltipWrapper} {
    visibility: visible;
  }
`

const Spacer = styled.div`
  height: 45px;
`

export default Tabs;