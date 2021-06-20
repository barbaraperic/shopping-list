import styled from 'styled-components';
import { Icon } from '../../assets'
import { COLORS } from '../../style/constants'

const Modal = ({ title, children }) => {
  return (
    <Overlay>
      <Content>
        <Header>
          <Title>{title}</Title>
          <CloseButton>
            <Icon id="remove" size={14}/>
            <VisuallyHidden>
              Dismiss modal
            </VisuallyHidden>
          </CloseButton>
        </Header>
      </Content>
      <ChildWrapper>
        {children}
      </ChildWrapper>
    </Overlay>
  )
}

const Overlay = styled.div`
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

const Content = styled.div`
  background-color: white;
  width: 350px;
  padding: 30px;
  border-radius: 24px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
  padding: 30px;
`

export default Modal