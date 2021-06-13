import styled from 'styled-components'
import { NavIcon, NotificationIcon } from '../assets';
import Tabs from './Tabs'
import logo from '../assets/logo.svg'

const SidebarLeft = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo} alt="logo"/>
      </LogoWrapper>
      <IconWrapper>
        <Tabs />
      </IconWrapper>
      <Notification>
        <NotificationIcon />
      </Notification>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: white;
  /* height: 100vh; */
  height: 100%;
  width: 93px;
  display: flex;
  flex-direction: column;
  position:absolute;
  top:0;
  bottom:0;
`

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.img`
  margin-top: 32px;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Notification = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-end;
`

export default SidebarLeft;