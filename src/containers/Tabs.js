import styled from 'styled-components';
import { NavIcon } from '../assets';

const Tabs = () => {
  return (
    <List>
      <ListItem>
        <StyledIcon id="list" />
        <Tooltip text="list" />
        <Spacer />
      </ListItem>
      <ListItem>
        <StyledIcon id="rotate"/>
        <Tooltip text="rotate" />
        <Spacer />
      </ListItem>
      <ListItem>
        <StyledIcon id="bar"/>
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
`

const TooltipWrapper = styled.span`
  visibility: hidden;

  &::after {
    content: '';
  }
`

const StyledIcon = styled(NavIcon)`
  position: relative;

  &:hover + ${TooltipWrapper} {
    visibility: visible;
  }
`

const Spacer = styled.div`
  height: 45px;
`



export default Tabs;