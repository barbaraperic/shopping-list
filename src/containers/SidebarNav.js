import styled from 'styled-components'
import { NavIcon, NotificationIcon, logo } from '../assets';

const SidebarNav = () => {
  return (
    <Wrapper>
      <Logo>
        <img src={logo}/>
      </Logo>
      <IconWrapper>
        <NavIcon id="list"/>
        <Spacer />
        <NavIcon id="rotate"/>
        <Spacer />
        <NavIcon id="bar"/>
      </IconWrapper>
      <Notification>
        <NotificationIcon />
      </Notification>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: white;
  height: 100%;
  width: 93px;
  display: flex;
  flex-direction: column;
  
`

const Logo = styled.div`
  flex: 1;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Spacer = styled.div`
  height: 75px;
`

const Notification = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-end;
`

export default SidebarNav