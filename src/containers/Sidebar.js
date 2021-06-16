import styled from 'styled-components';
import { COLORS } from '../style/constants'
import AddItemCard from '../components/AddItemCard'
import { Icon } from '../assets'

const Sidebar = ({ children }) => {
  return (
    <Wrapper>
      <AddItemCard />
      <TextWrapper>
        <Title>Shopping List</Title>
        <Icon id="edit" size={16}/>
      </TextWrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  height: 100vh;
  width: 380px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.lightPrimary};
`

const Title = styled.h3`
  font-weight: normal;
  font-size: 24px;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 40px 0;
`

export default Sidebar