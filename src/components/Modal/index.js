import styled from 'styled-components';
import {
  DialogOverlay,
  DialogContent
} from "@reach/dialog";
import { Icon } from '../../assets'
import { COLORS } from '../../style/constants'


const Modal = ({ title, isOpen, handleDismiss, children }) => {
  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={handleDismiss}
    >
      <Content aria-label={title}>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={handleDismiss}>
            <StyledIcon id="remove" size={14}/>
            <VisuallyHidden>
              Dismiss modal
            </VisuallyHidden>
          </CloseButton>
        </Header>
      <ChildWrapper>
        {children}
      </ChildWrapper>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${COLORS.grayTransparent};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled(DialogContent)`
  background-color: white;
  width: 350px;
  padding: 30px;
  padding-bottom: 10px;
  border-radius: 24px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
  color: ${COLORS.gray500};

  &:hover {
    color: black;
  }
`

const Title = styled.h3`
  font-weight: normal;
  max-width: 250px;
  line-height: 1.3;
`

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: -10px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`

const ChildWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;

  > * {
    &:first-child {
      margin-right: 10px;
    }
  }
`

export default Modal